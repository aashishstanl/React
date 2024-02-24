import { useState } from "react";

import "./App.css";
import React, { useRef } from "react";

function App() {
  const [isPlaying, setPlaying] = useState(false);

  const ref = useRef();

  console.log(ref.current);

  const PlayingVedio = () => {
    ref.current.play();
    if (Key === "Spacebar") {
      ref.current.pause();
    }
  };
  const PauseVedio = () => {
    ref.current.pause();
    if (Key === "Spacebar") {
      ref.current.play();
    }
  };

  return (
    <>
      <div className="max-w-[300px] space-y-4 p-4 mx-auto">
        <h1 className="text-center font-bold text-3xl">Video Player</h1>
        <video
          ref={ref}
          src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
          poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        <div className="flex justify-between">
          <button
            onClick={PlayingVedio()}
            className="text-orange-500 font-semibold"
          >
            Pause
          </button>
          <div>{isPlaying ? "Playing..." : "Paused"}</div>
          <button
            onClick={PauseVedio()}
            className="text-indigo-500 font-semibold"
          >
            Play
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
