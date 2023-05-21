import './App.css';
import GameContainer from './containers/GameContainer';

function App() {
  return (
    <div className="App">
      <GameContainer />
      <p style={{textAlign: "center"}}>
        Arrow keys = move animal<br/><br/>Spacebar = select different animal
      </p>
    </div>
  );
}

export default App;
