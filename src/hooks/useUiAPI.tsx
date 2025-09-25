import { testFunction } from "../utils/testFunction"

export type UiAPIType = {
    testFunction: () => void
}

// use this to expose functions to the game
export function useUiAPI(){
    return {
        testFunction: testFunction
    }
}
