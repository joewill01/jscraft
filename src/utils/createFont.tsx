import * as opentype from 'opentype.js';

function createFont() {
    console.log("Creating font...");
    let image = new Image();

    image.onload = () => {
        let canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
            throw new Error("Could not get 2D context from canvas.");
        }
        ctx.drawImage(image, 0, 0, image.width, image.height);
        const imageData = ctx.getImageData(0, 0, image.width, image.height).data;

        const charWidth = image.width / 16;
        const charHeight = image.height / 16;
        const cols = 16;
        const rows = 16;
        const unitsPerEm = 1000; 
        const scaleFactor = unitsPerEm / charHeight;

        function getCharacterBounds(x: number, y: number) {
            let minX = charWidth, maxX = 0;

            for (let px = 0; px < charWidth; px++) {
                for (let py = 0; py < charHeight; py++) {
                    const pixelIndex = ((y + py) * image.width + (x + px)) * 4;
                    if (imageData[pixelIndex + 3] > 128) {
                        if (px < minX) minX = px;
                        if (px > maxX) maxX = px;
                    }
                }
            }

            return (maxX >= minX) ? { minX, maxX, width: maxX - minX + 1 } : null;
        }

        const extractGlyph = (x: number, y: number) => {
            const bounds = getCharacterBounds(x, y);
            if (!bounds) return null;

            const path = new opentype.Path();
            for (let py = 0; py < charHeight; py++) {
                for (let px = bounds.minX; px <= bounds.maxX; px++) {
                    const pixelIndex = ((y + py) * image.width + (x + px)) * 4;
                    if (imageData[pixelIndex + 3] > 128) {
                        const scaledX = px * scaleFactor;
                        const scaledY = (charHeight - py) * scaleFactor;
                        path.moveTo(scaledX, scaledY);
                        path.lineTo(scaledX + scaleFactor, scaledY);
                        path.lineTo(scaledX + scaleFactor, scaledY - scaleFactor);
                        path.lineTo(scaledX, scaledY - scaleFactor);
                        path.close();
                    }
                }
            }

            return { path, width: bounds.width * scaleFactor };
        };

        const glyphs = [];
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const x = col * charWidth;
                const y = row * charHeight;
                const glyphData = extractGlyph(x, y);
                if (glyphData) {
                    glyphs.push(new opentype.Glyph({
                        name: `char_${row * cols + col}`,
                        unicode: row * cols + col,
                        advanceWidth: glyphData.width,
                        path: glyphData.path,
                    }));
                }
            }
        }

        const font = new opentype.Font({
            familyName: "ResourceFont",
            styleName: "Regular",
            unitsPerEm: unitsPerEm,
            ascender: unitsPerEm,
            descender: 0,
            glyphs: glyphs,
        });

        const fontBlob = new Blob([font.toArrayBuffer()], { type: "application/octet-stream" });
        const fontUrl = URL.createObjectURL(fontBlob);

        const style = document.createElement("style");
        style.textContent = `
            @font-face {
                font-family: 'ResourceFont';
                src: url(${fontUrl}) format('opentype');
            }
            html, input {
                font-family: 'ResourceFont', sans-serif;
                text-shadow: 0.125em 0.125em #444;
                letter-spacing: 0.125em;
                font-size: 16px;
            }
        `;
        document.head.appendChild(style);
    };

    image.src = require("../assets/resource/textures/font/ascii.png");
}

export default createFont;