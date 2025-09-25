import { BlockBase } from "./block_base";

export class Air extends BlockBase  {

    constructor(x: number, y: number, z: number) {
        super(x, y, z);

        this.x = x;
        this.y = y;
        this.z = z;

        this.name = "Air";
        this.id = 0;
    }
}
