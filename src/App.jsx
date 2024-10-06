import Player from "./components/Player";
import TimerChallange from "./components/TimerChallange";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title="Easy" targetTime={1} />
        <TimerChallange title="Medium" targetTime={5} />
        <TimerChallange title="Hard" targetTime={10} />
        <TimerChallange title="Pro" targetTime={15} />
      </div>
    </>
  );
}

export default App;
