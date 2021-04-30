import yen from "./media/yen.mp4";
import bg from "./media/bg.jpg";
import "./App.css";
import GlitchSquiggly from "react-glitch-effect/core/GlitchSquiggly";
import GlitchText from "react-glitch-effect/core/GlitchText";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://soundcloud.com/FIENDWORLDWIDE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GlitchText>
            <GlitchSquiggly onHover={true}>SOUNDCLOUD</GlitchSquiggly>
          </GlitchText>
        </a>
        <a
          className="App-link"
          href="https://discord.com/invite/GZtuygu4gJ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GlitchText>
            <GlitchSquiggly onHover={true}>DISCORD</GlitchSquiggly>
          </GlitchText>
        </a>
        <a
          className="App-link"
          href="https://fiendworldwide.bandcamp.com/releases"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GlitchText>
            <GlitchSquiggly onHover={true}>BANDCAMP</GlitchSquiggly>
          </GlitchText>
        </a>
        <div className="player-wrapper">
          <video
            autoPlay
            loop
            muted
            style={{
              poistion: "absolute",
              width: "100%",
              height: "100%",
              left: "50%",
              top: "50%",
              objectFit: "cover",
            }}
          >
            <source src={yen} type="video/mp4" />
          </video>
        </div>
      </header>
    </div>
  );
}

export default App;
