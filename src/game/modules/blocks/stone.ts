import { BlockBase } from "./block_base";

export class Stone extends BlockBase  {

    constructor(x: number, y: number, z: number) {
        super(x, y, z);

        this.x = x;
        this.y = y;
        this.z = z;

        this.name = "Stone";
        this.id = 5;
    }
}
