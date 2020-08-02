import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ReactAudioPlayer from 'react-audio-player';
//import soundfile from './audio/Faded_95.wav'

//import ReactAudioPlayer from 'react-audio-player'

var audio: HTMLAudioElement;
var check_time : number;
check_time = 0;

let bpm_times: string[] = [];

function App() {
  audio = new Audio(require("./audio/Faded_95.wav"));
  //audio.src = "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
  audio.volume = 1;
  
  return (
    <div>
      <input onClick={start} type="button" value="start"></input>
      <button id="puase_button" onClick={pause} type="button" value="0">pause</button>
      <button id="stop_button" onClick={stop} type="button" value="0">stop</button>
      <br/>
      <input id="check_b" onClick={check} type="button" value={check_time}></input>
      <input id="list" onClick={check} type="button" value={bpm_times.join()}></input>
      <br/>
      <ReactAudioPlayer
        src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
        controls
      />
    </div>
  );
}

function start(): void // no ';' here
{
  audio.play();
}

function pause(): void // no ';' here
{
  audio.pause();
  return;
}

function stop(): void // no ';' here
{
  audio.pause();
  audio.currentTime = 0;
  return;
}

function check(): void // no ';' here
{
  
  bpm_times.push(audio.currentTime.toString());
  check_time = audio.currentTime;
  console.log(check_time);
  document.querySelector("#check_b")?.setAttribute("value",check_time.toString());
  document.querySelector("#list")?.setAttribute("value",bpm_times.join().toString());
  return;
}

export default App;
