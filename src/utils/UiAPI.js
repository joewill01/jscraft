import { testFunction } from "./testFunction"

// use this to expose functions to the game

export function GetUiAPI(){
    return {
        testFunction: testFunction
    }
}