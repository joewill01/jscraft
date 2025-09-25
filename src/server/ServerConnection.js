export class ServerConnection {
    ws
    worker
    onMessage

    constructor(onMessage, multiplayer) {
        this.onMessage = onMessage;
        if (multiplayer) {
            this.ws = new WebSocket('ws://localhost:8080');
            this.ws.onmessage = (e) => this.onMessage(JSON.parse(e.data));
        } else {
            this.worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' });
            this.worker.onmessage = (e) => this.onMessage(e.data);
        }
    }

    send(msg) {
        if (this.ws) this.ws.send(JSON.stringify(msg));
        if (this.worker) this.worker.postMessage(msg);
    }
}