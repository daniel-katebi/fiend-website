import "../App.css";
import GlitchSquiggly from "react-glitch-effect/core/GlitchSquiggly";
import GlitchText from "react-glitch-effect/core/GlitchText";

function Links() {
  return (
    <div className="Link-panel">
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
    </div>
  );
}

export default Links;
