import GameInstance from './components/GameInstance';
import JSCButton from './components/JSCButton';
import createFont from './utils/createFont';
import { GetUiAPI } from './utils/UiAPI';

function App() {
  let image = createFont();

  let GameAPI;

  function setGameAPI(passedGameAPI) {
    GameAPI = passedGameAPI
  }

  return (
    <div className="App">
      <JSCButton width={450}>Singleplayer</JSCButton>
      <JSCButton width={450}>Multiplayer</JSCButton>
      <JSCButton width={450}>Minecraft Realms</JSCButton>
      <GameInstance UiAPI={GetUiAPI()} setGameAPI={setGameAPI}/>
    </div>
  );
}

export default App;
