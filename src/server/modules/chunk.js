const CHUNK_SIZE_X = 16;
const CHUNK_SIZE_Z = 16;
const CHUNK_SIZE_Y = 256;

const CHUNK_VOLUME = CHUNK_SIZE_X * CHUNK_SIZE_Y * CHUNK_SIZE_Z; // 65536

// Example chunk generator
export function generateChunk(chunkX, chunkZ) {

    const chunk = new Uint32Array(CHUNK_VOLUME);

    for (let y = 0; y < CHUNK_SIZE_Y; y++) {
        for (let z = 0; z < CHUNK_SIZE_Z; z++) {
            for (let x = 0; x < CHUNK_SIZE_X; x++) {
            if (y === 0) {
                setBlock(chunk, x, y, z, packBlock(2)); // bedrock
            } else if (y < 60) {
                setBlock(chunk, x, y, z, packBlock(1)); // stone
            } else if (y < 64) {
                setBlock(chunk, x, y, z, packBlock(3)); // dirt
            } else if (y === 64) {
                setBlock(chunk, x, y, z, packBlock(4)); // grass
            } else {
                setBlock(chunk, x, y, z, packBlock(0)); // air
            }
            }
        }
    }

    return {
        x: chunkX,
        z: chunkZ,
        blocks: chunk
    };
}

export function getIndex(x, y, z) {
  return x + z * CHUNK_SIZE_X + y * (CHUNK_SIZE_X * CHUNK_SIZE_Z);
}

export function setBlock(chunk, x, y, z, blockId) {
  chunk[getIndex(x, y, z)] = blockId; // later: pack id+light+meta
}

export function getBlock(chunk, x, y, z) {
  return chunk[getIndex(x, y, z)];
}

function packBlock(id, light = 0, meta = 0) {
  return (id & 0xFFF) | ((light & 0xF) << 12) | ((meta & 0xFF) << 16);
}

function unpackId(val)    { return val & 0xFFF; }
function unpackLight(val) { return (val >> 12) & 0xF; }
function unpackMeta(val)  { return (val >> 16) & 0xFF; }