import "../App.css";
import yen from "../media/yen.mp4";

function Video() {
  return (
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
  );
}

export default Video;
