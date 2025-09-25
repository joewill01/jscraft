/* eslint-env worker */
/* eslint-disable no-restricted-globals, no-undef */

import { generateChunk } from './modules/chunk.js';

console.log('Worker: Started');

self.onmessage = function(e) {
    const { type, x, y } = e.data;
    if (type === 'getChunk') {
        console.log(`Worker: Generating chunk at (${x}, ${y})`);

        const chunk = generateChunk(x, y);
        self.postMessage({ type: 'chunkData', chunk });
    }
};
