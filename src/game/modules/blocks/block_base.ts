import * as THREE from 'three';
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js";

export class BlockBase {
    protected x: number;
    protected y: number;
    protected z: number;

    protected id: number;
    protected name: string;
    
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;

        this.id = 0;
        this.name = "";
    }

    addGeometryToChunk(chunk_geom: THREE.BufferGeometry): THREE.BufferGeometry {
        const box = new THREE.BoxGeometry(1, 1, 1);
        box.translate(this.x + 0.5, this.y + 0.5, this.z + 0.5);

        return BufferGeometryUtils.mergeGeometries([chunk_geom, box]);
    }
}