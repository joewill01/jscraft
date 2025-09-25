import wsLib from 'ws';
import { handleMessage } from './main.js';

const wss = new wsLib.Server({ port: 8080 });

wss.on('connection', (ws) => {
    ws.on('message', (data) => {
        const message = JSON.parse(data.toString());
        console.log('Server: Received message', message);
        handleMessage(message, (response) => ws.send(JSON.stringify(response)));
    });
});

export {};