import * as THREE from 'three';
import { ServerConnection } from '../server/ServerConnection';
import { Chunk } from './modules/world/chunk';

export function InitGame(renderer: THREE.WebGLRenderer, multiplayer: boolean): void {
    const server = new ServerConnection((message: any) => {
        // Handle incoming messages from the server

        if (message.type === 'chunkData') {
            // Process chunk data
            console.log("Received chunk data:", message);

            const chunk = new Chunk(message.chunk.x, message.chunk.z, message.chunk.blocks).render();

            scene.add(chunk);
            camera.position.set(50, 60, 35);
            camera.lookAt(new THREE.Vector3(8, 30, 8));
        }
    }, multiplayer);

    // Example: Request a chunk from the server at (0,0)
    server.send({ type: 'getChunk', x: 0, y: 0 });

    // Create scene and camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x99ccff, 70, 90);
    scene.background = new THREE.Color(0x99ccff);

    const camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
}