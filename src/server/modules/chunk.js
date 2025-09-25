// Example chunk generator
export function generateChunk(chunkX, chunkZ) {
    // Replace with real generation logic
    return {
        x: chunkX,
        z: chunkZ,
        blocks: Array.from({ length: 256 }, () => Math.random() > 0.5 ? 1 : 0)
    };
}