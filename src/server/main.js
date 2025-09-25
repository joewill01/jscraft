import { generateChunk } from "./modules/chunk.js";

// Message handler for worker or WebSocket
export function handleMessage(message, send) {
    if (message.type === 'getChunk') {
        const chunk = generateChunk(message.x, message.y);
        send({ type: 'chunkData', chunk });
    }
}
