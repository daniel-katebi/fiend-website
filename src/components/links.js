import "../App.css";
import GlitchSquiggly from "react-glitch-effect/core/GlitchSquiggly";
import GlitchText from "react-glitch-effect/core/GlitchText";

function Links() {
  return (
    <div className="Link-panel">
      <a
        className="Link-text"
        href="https://soundcloud.com/FIENDWORLDWIDE"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GlitchText>
          <GlitchSquiggly onHover={true}>SOUNDCLOUD</GlitchSquiggly>
        </GlitchText>
      </a>
      <a
        className="Link-text"
        href="https://fiendworldwide.bandcamp.com/releases"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GlitchText>
          <GlitchSquiggly onHover={true}>BANDCAMP</GlitchSquiggly>
        </GlitchText>
      </a>
      <a
        className="Link-text"
        href="https://fiend-club.creator-spring.com/listing/katebi-cutspace-paq-tee?product=369"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GlitchText>
          <GlitchSquiggly onHover={true}>Merch</GlitchSquiggly>
        </GlitchText>
      </a>
    </div>
  );
}

export default Links;
