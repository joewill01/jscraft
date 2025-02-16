import JSCButton from './components/JSCButton';
import createFont from './utils/createFont';

function App() {
  let image = createFont();

  return (
    <div className="App">
      <JSCButton width={450}>Singleplayer</JSCButton>
      <JSCButton width={450}>Multiplayer</JSCButton>
      <JSCButton width={450}>Minecraft Realms</JSCButton>
    </div>
  );
}

export default App;
