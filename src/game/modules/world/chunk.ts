import * as THREE from 'three';
import { Air } from '../blocks/air';
import { Stone } from '../blocks/stone';

export class Chunk {
	cdata: number[];
	ctextures: any[];
	x: number;
	z: number;
	name: string;
	chunk_geom: any;
	chunk?: any[];
	uuid?: string;
    chunk_mesh?: THREE.Mesh;

	constructor(x: number, z: number, cdata: number[]) {
		this.cdata = cdata;
		this.ctextures = [];
		this.x = x;
		this.z = z;
		this.name = x.toString() + "_" + z.toString();
		this.chunk_geom = null;
	}

    render(){
		this.chunk = [];
		let chunk_geom = new THREE.BoxGeometry();
		this.uuid = chunk_geom.uuid

        this.cdata.forEach((id, e) => {
			console.log(id)
            let y = Math.floor(e / 256);
            let lx = Math.floor((e - (256 * y)) / 16); // renamed from x to lx
            let lz = (e - (256 * y) - (lx * 16));      // renamed from z to lz
			if (id === 0) {
            	this.chunk!.push(new Air(lx, y, lz)); // Placeholder: Replace Air with actual block based on id
			} else {
				// Placeholder: Replace Air with actual block based on id
				this.chunk!.push(new Stone(lx, y, lz));
			}
        });

        this.chunk.forEach(function(block, e) {
			if(!(block instanceof Air)){
	    		chunk_geom = block.addGeometryToChunk(chunk_geom)
	    	}
		}, this);

        this.chunk_geom = chunk_geom;

        let chunk_mesh = new THREE.Mesh(chunk_geom, /* Materials */);

        chunk_mesh.name = this.name + "_mesh"
		this.chunk_mesh = chunk_mesh
		return chunk_mesh
    }
}