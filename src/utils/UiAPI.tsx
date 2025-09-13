import { testFunction } from "./testFunction"

export type UiAPIType = {
    testFunction: () => void;
}

// use this to expose functions to the game

export function GetUiAPI(){
    return {
        testFunction: testFunction
    }
}