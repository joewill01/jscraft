import { Dispatch, SetStateAction, useRef, useEffect } from 'react';
import { UiAPIType } from '../../hooks/useUiAPI';
import './GameInstance.module.css';
import Text from '../Text';
import * as THREE from 'three';
import { InitGame } from '../../game/main';


type GameInstanceProps = {
    UiAPI: UiAPIType;
    setGameAPI: Dispatch<SetStateAction<any>>;
}

function GameInstance({UiAPI, setGameAPI}: GameInstanceProps) {
    const mountRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Attach renderer to the ref div
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        InitGame(renderer, false);

    }, [setGameAPI]);

    setGameAPI({})

    // this will create an instance of the minecraft game using a function that will take in the UIAPI and return the gameApi

    return (
        <div ref={mountRef} style={{ width: '100%', height: '100%' }}>
        </div>
    );
}

export default GameInstance;