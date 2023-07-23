import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    const progress = (video.currentTime / video.duration) * 100;
    setProgress(progress);
  };

  const handleProgressClick = (e) => {
    const progressBar = playerRef.current.querySelector('.progress-bar');
    const newProgress = (e.nativeEvent.offsetX / progressBar.clientWidth) * 100;
    setProgress(newProgress);
    const video = videoRef.current;
    video.currentTime = (newProgress / 100) * video.duration;
  };

  const handleVolumeChange = (e) => {
    const video = videoRef.current;
    setVolume(e.target.value);
    video.volume = e.target.value;
  };

  const handleFullscreen = () => {
    const player = playerRef.current;
    if (player.requestFullscreen) {
      player.requestFullscreen();
    } else if (player.mozRequestFullScreen) {
      player.mozRequestFullScreen();
    } else if (player.webkitRequestFullscreen) {
      player.webkitRequestFullscreen();
    } else if (player.msRequestFullscreen) {
      player.msRequestFullscreen();
    }
  };

  return (
    <div className="custom-video-player" ref={playerRef}>
      <video
        ref={videoRef}
        src={'https://youtu.be/vNPzlfdn0Fo?t=7'}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
      <div className="controls">
        <button onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <div className="progress-bar" onClick={handleProgressClick}>
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        <button onClick={handleFullscreen}>Fullscreen</button>
      </div>
    </div>
  );
}

export default App;
