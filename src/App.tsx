import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ReactAudioPlayer from 'react-audio-player';
//import soundfile from './audio/Faded_95.wav'

//import ReactAudioPlayer from 'react-audio-player'

var audio_main : HTMLAudioElement | null = new Audio();
var check_time : number;
check_time = 0;

let audio_0 : HTMLAudioElement = new Audio(require('./drum/0.wav'));
let audio_1 : HTMLAudioElement = new Audio(require('./drum/1.wav'));
let audio_2 : HTMLAudioElement = new Audio(require('./drum/2.wav'));
let audio_3 : HTMLAudioElement = new Audio(require('./drum/3.wav'));
let audio_4 : HTMLAudioElement = new Audio(require('./drum/4.wav'));

let audio_list : HTMLAudioElement[] = [audio_0, audio_1, audio_2, audio_3, audio_4]


let bpm_times: number[] = [];

var sync_time_1 : number[];
var sync_time_2 : number[];
var sync_time_3 : number[];
var sync_time_4 : number[];
sync_time_1 = [0.2608425826468703, 2.7871583721205546, 5.313474161594239, 
  7.839789951067923, 10.366105740541606, 12.892421530015291, 
  15.418737319488976, 17.94505310896266, 20.471368898436346, 
  22.99768468791003, 25.524000477383716, 28.0503162668574, 
  30.576632056331086, 33.10294784580477, 35.629263635278456, 
  38.15557942475214, 40.681895214225825, 43.20821100369951, 
  45.734526793173195, 48.26084258264688, 50.787158372120565, 
  53.31347416159425, 55.839789951067935, 58.36610574054162, 
  60.892421530015305, 63.41873731948899, 65.94505310896267, 
  68.47136889843635, 70.99768468791004, 73.52400047738372, 
  76.05031626685741, 78.57663205633109, 81.10294784580478, 
  83.62926363527846, 86.15557942475215, 88.68189521422583, 
  91.20821100369952, 93.7345267931732, 96.26084258264689, 
  98.78715837212057, 101.31347416159426, 103.83978995106794, 
  106.36610574054163, 108.89242153001531, 111.418737319489, 
  113.94505310896268, 116.47136889843637, 118.99768468791005, 
  121.52400047738374, 124.05031626685742, 126.5766320563311, 
  129.10294784580478, 131.62926363527845, 134.15557942475212, 
  136.6818952142258, 139.20821100369946, 141.73452679317313, 
  144.2608425826468, 146.78715837212047, 149.31347416159414, 
  151.83978995106781, 154.36610574054149, 156.89242153001516, 
  159.41873731948883, 161.9450531089625, 164.47136889843617, 
  166.99768468790984, 169.5240004773835, 172.05031626685718, 
  174.57663205633085, 177.10294784580452, 179.6292636352782];
sync_time_2 = [0.8924215300152913, 3.418737319488976, 5.94505310896266, 
  8.471368898436344, 10.997684687910027, 13.524000477383712, 
  16.050316266857397, 18.576632056331082, 21.102947845804767, 
  23.629263635278452, 26.155579424752137, 28.681895214225822, 
  31.208211003699507, 33.73452679317319, 36.26084258264687, 
  38.78715837212056, 41.31347416159424, 43.83978995106793, 
  46.36610574054161, 48.8924215300153, 51.41873731948898, 
  53.94505310896267, 56.47136889843635, 58.99768468791004, 
  61.52400047738372, 64.05031626685741, 66.57663205633109, 
  69.10294784580478, 71.62926363527846, 74.15557942475215, 
  76.68189521422583, 79.20821100369952, 81.7345267931732, 
  84.26084258264689, 86.78715837212057, 89.31347416159426, 
  91.83978995106794, 94.36610574054163, 96.89242153001531, 
  99.418737319489, 101.94505310896268, 104.47136889843637, 
  106.99768468791005, 109.52400047738374, 112.05031626685742, 
  114.5766320563311, 117.10294784580479, 119.62926363527848, 
  122.15557942475216, 124.68189521422585, 127.20821100369953, 
  129.7345267931732, 132.26084258264686, 134.78715837212053, 
  137.3134741615942, 139.83978995106787, 142.36610574054154, 
  144.8924215300152, 147.41873731948888, 149.94505310896255, 
  152.47136889843622, 154.9976846879099, 157.52400047738357, 
  160.05031626685724, 162.5766320563309, 165.10294784580458, 
  167.62926363527825, 170.15557942475192, 172.6818952142256, 
  175.20821100369926, 177.73452679317293, 180.2608425826466];
sync_time_3 = [1.5240004773837124, 4.050316266857397, 6.57663205633108, 
  9.102947845804765, 11.629263635278448, 14.155579424752133, 
  16.68189521422582, 19.208211003699503, 21.73452679317319, 
  24.260842582646873, 26.787158372120558, 29.313474161594243, 
  31.839789951067928, 34.36610574054161, 36.8924215300153, 
  39.41873731948898, 41.94505310896267, 44.47136889843635, 
  46.99768468791004, 49.52400047738372, 52.05031626685741,
  54.57663205633109, 57.10294784580478, 59.62926363527846,
  62.15557942475215, 64.68189521422583, 67.2082110036995, 
  69.73452679317319, 72.26084258264687, 74.78715837212056,
  77.31347416159424, 79.83978995106793, 82.36610574054161, 
  84.8924215300153, 87.41873731948898, 89.94505310896267, 
  92.47136889843635, 94.99768468791004, 97.52400047738372, 
  100.05031626685741, 102.57663205633109, 105.10294784580478, 
  107.62926363527846, 110.15557942475215, 112.68189521422583, 
  115.20821100369952, 117.7345267931732, 120.26084258264689, 
  122.78715837212057, 125.31347416159426, 127.83978995106794, 
  130.36610574054163, 132.8924215300153, 135.41873731948897, 
  137.94505310896264, 140.4713688984363, 142.99768468790998, 
  145.52400047738365, 148.05031626685732, 150.576632056331, 
  153.10294784580466, 155.62926363527833, 158.155579424752, 
  160.68189521422568, 163.20821100369935, 165.73452679317302, 
  168.2608425826467, 170.78715837212036, 173.31347416159403, 
  175.8397899510677, 178.36610574054137, 180.89242153001504];

  sync_time_4 = [2.1555794247521334, 4.6818952142258174, 7.2082110036995015, 
    9.734526793173186, 12.26084258264687, 14.787158372120555, 
    17.31347416159424, 19.839789951067925, 22.36610574054161, 
    24.892421530015294, 27.41873731948898, 29.945053108962664, 
    32.471368898436346, 34.99768468791003, 37.524000477383716, 
    40.0503162668574, 42.576632056331086, 45.10294784580477, 
    47.629263635278456, 50.15557942475214, 52.681895214225825, 
    55.20821100369951, 57.734526793173195, 60.26084258264688, 
    62.787158372120565, 65.31347416159426, 67.83978995106793, 
    70.36610574054161, 72.8924215300153, 75.41873731948898, 
    77.94505310896267, 80.47136889843635, 82.99768468791004, 
    85.52400047738372, 88.05031626685741, 90.57663205633109, 
    93.10294784580478, 95.62926363527846, 98.15557942475215, 
    100.68189521422583, 103.20821100369952, 105.7345267931732, 
    108.26084258264689, 110.78715837212057, 113.31347416159426, 
    115.83978995106794, 118.36610574054163, 120.89242153001531, 
    123.418737319489, 125.94505310896268, 128.47136889843637, 
    130.99768468791004, 133.5240004773837, 136.05031626685738, 
    138.57663205633105, 141.10294784580472, 143.6292636352784, 
    146.15557942475206, 148.68189521422573, 151.2082110036994, 
    153.73452679317307, 156.26084258264675, 158.78715837212042, 
    161.3134741615941, 163.83978995106776, 166.36610574054143, 
    168.8924215300151, 171.41873731948877, 173.94505310896244, 
    176.4713688984361, 178.99768468790978, 181.52400047738345];  




function App() {

  audio_main = document.querySelector('#audio');
  audio_main = new Audio(require("./audio/Faded_95.wav"));
  //audio.volume = 1; 

  if (audio_main != null) {
    //audio.src = require("./audio/Faded_95.wav");
    audio_main.volume = 1;
    //audio.load();
  }

  //audio = new Audio(require("./audio/Faded_95.wav"));
  //audio.src = "https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"
  //audio.volume = 1;
  
  return (
    <body onKeyPress={handleKeyPress} tabIndex={-1}>
      <input onClick={load} type="button" value="load"></input>
      <input onClick={start} type="button" value="start"></input>
      <button id="puase_button" onClick={pause} type="button" value="0">pause</button>
      <button id="stop_button" onClick={stop} type="button" value="0">stop</button>
      <br/>
      <audio id="audio" src="#" controls></audio>
      <br/>
      <text>=============================resync function===========================</text>
      <br/>
      <input id="check_b" onClick={check} type="button" value="check!"></input>
      <br/>
      <input id="list" type="button" value={bpm_times.join()}></input>
      <br/>
      <input id="resync" onClick={resync} type="button" value="resync"></input>
      <br/>
      <input id="sync1" type="button" value="sync1"></input>
      <input id="sync2" type="button" value="sync2"></input>
      <input id="sync3" type="button" value="sync3"></input>
      <input id="sync4" type="button" value="sync4"></input>
      <br/>
      <text>=============================preset function===========================</text>
      <br/>
      <input id="play_test" onClick={play_preset_sync} type="button" value="test"></input>
      <input id="play_test" onClick={handleKeyPress} type="button" value="audio1" onKeyPress={handleKeyPress} tabIndex={-1}></input>
    </body>
  );
}

function load(): void{
  audio_main = document.querySelector('#audio');
  //audio = new Audio(require("./audio/Faded_95.wav"));
  //audio.volume = 1; 

  if (audio_main != null) {

    audio_main.src = require("./audio/Faded_95.wav");
    audio_main.volume = 0.5;
    audio_main.currentTime = 0;
    audio_main.preload = "auto"
    audio_main.load();
    
  }
  //audio = new Audio(require("./audio/Faded_95.wav"));
  //audio.volume = 1;
  let syncb : HTMLInputElement | null = document.querySelector('#sync1');
  syncb?.setAttribute("value", "+++++")
  syncb = document.querySelector('#sync2');
  syncb?.setAttribute("value", "sync2")
  syncb = document.querySelector('#sync3');
  syncb?.setAttribute("value", "sync3")
  syncb = document.querySelector('#sync4');
  syncb?.setAttribute("value", "sync4")
}

function start(): void // no ';' here
{
  if (audio_main != null)
    audio_main.play();
}

function pause(): void // no ';' here
{
  if (audio_main != null)
    audio_main.pause();
  return;
}

function stop(): void // no ';' here
{
  if (audio_main != null)
  {
    audio_main.pause();
    audio_main.currentTime = 0;
  }
  return;
}

//===========================================resync function=====================================

//get input (user bpm) 
function check(): void // no ';' here
{
  if (audio_main != null)
  {
    bpm_times.push(audio_main.currentTime);
    check_time = audio_main.currentTime;
    //console.log(check_time);
    //document.querySelector("#check_b")?.setAttribute("value",check_time.toString());
    document.querySelector("#list")?.setAttribute("value",bpm_times.join().toString());
  }
  return;
}

function resync(): string // no ';' here
{
  let one_bar_length : number = sync_time_1[1] - sync_time_1[0];
  let one_beat_length : number = sync_time_2[0] - sync_time_1[0];
  let sync_index : number = 0;

  let input_beat_num : number = bpm_times.length;
  let user_bar_length : number[] = [];

  //make duration set between the user beat
  for (var i=1; i<bpm_times.length; i++) 
  {
    user_bar_length.push(bpm_times[i] - bpm_times[i-1]);
  }

  let correct_beat_num : number = 0;
  let correct_beat_idx : number[] = [];

  let incorrect_beat_num : number = 0;
  let is_correct_beat : number;

  //check the duration is correct or not
  for (var i=0; i<input_beat_num-1; i++)
  {
    is_correct_beat = user_bar_length[i] / one_bar_length;
    console.log(is_correct_beat);
    if (is_correct_beat > 0.8 && is_correct_beat < 1.2)
    {
      correct_beat_num++;
      correct_beat_idx.push(i);
    }
    else
    {
      incorrect_beat_num++;
    }
  }

  if (correct_beat_num / (correct_beat_num + incorrect_beat_num) < 0.7) {
    bpm_times = [];
    document.querySelector("#list")?.setAttribute("value",bpm_times.join().toString());
    document.querySelector("#resync")?.setAttribute("value","sync failed: can not read bpm in input value");
    return "sync failed: can not read bpm in input value"
  }

  let correct_beat_times : number[] =[];
  
  for (var i=0; i<correct_beat_num; i++)
  {
    correct_beat_times.push(bpm_times[correct_beat_idx[i]]);
  }

  let sync1_score_sum : number = 0;
  let sync2_score_sum : number = 0;
  let sync3_score_sum : number = 0;
  let sync4_score_sum : number = 0;

  let sync1_score : number = 0;
  let sync1_score_2 : number = 0;
  let sync2_score : number = 0;
  let sync3_score : number = 0;
  let sync4_score : number = 0;

  let sync_time_length = sync_time_1.length;

  let correct_beat_t : number;

  for (var i=0; i<correct_beat_num; i++)
  {
    while(sync_index + 1 < sync_time_length &&
      sync_time_1[sync_index + 1] < correct_beat_times[i])
    {
      sync_index++;
    }
    correct_beat_t = correct_beat_times[i];

    sync1_score = 1 - (correct_beat_t - sync_time_1[sync_index]) ** 2;
    sync1_score_2 = 1 - (correct_beat_t - sync_time_1[sync_index + 1]) ** 2;
    if(sync1_score < sync1_score_2){
      sync1_score = sync1_score_2;
    }
    sync2_score = 1 - (correct_beat_t - sync_time_2[sync_index]) ** 2;
    sync3_score = 1 - (correct_beat_t - sync_time_3[sync_index]) ** 2;
    sync4_score = 1 - (correct_beat_t - sync_time_4[sync_index]) ** 2;

    sync1_score_sum += sync1_score;
    sync2_score_sum += sync2_score;
    sync3_score_sum += sync3_score;
    sync4_score_sum += sync4_score;
  }

  let scores : number[] = [sync1_score_sum, sync2_score_sum, sync3_score_sum, sync4_score_sum]

  if (Math.max.apply(null, scores) < 0)
  {
    bpm_times = [];
    document.querySelector("#list")?.setAttribute("value",bpm_times.join().toString());
    document.querySelector("#resync")?.setAttribute("value","sync failed: can not find accurate sync set");
    return "sync failed: can not find accurate sync set"
  }
  
  let best_sync : number = scores.indexOf(Math.max.apply(null, scores)) + 1;
  
  bpm_times = [];
  document.querySelector("#list")?.setAttribute("value",bpm_times.join().toString());
  document.querySelector("#resync")?.setAttribute("value","sync finished");

  let syncb : HTMLInputElement | null
  syncb = document.querySelector('#sync1');
  syncb?.setAttribute("value", "sync1")
  syncb = document.querySelector('#sync2');
  syncb?.setAttribute("value", "sync2")
  syncb = document.querySelector('#sync3');
  syncb?.setAttribute("value", "sync3")
  syncb = document.querySelector('#sync4');
  syncb?.setAttribute("value", "sync4")

  if (best_sync == 1)
  {
    syncb = document.querySelector('#sync1');
    syncb?.setAttribute("value", "+++++")
  }
  else if (best_sync == 2)
  {
    syncb = document.querySelector('#sync2');
    syncb?.setAttribute("value", "+++++")
  }
  else if (best_sync == 3)
  {
    syncb = document.querySelector('#sync3');
    syncb?.setAttribute("value", "+++++")
  }
  else if (best_sync == 4)
  {
    syncb = document.querySelector('#sync4');
    syncb?.setAttribute("value", "+++++")
  }

  return "sync finished";
}
//===========================================preset function=====================================

let preset_info : number[][];
//kick: 0, open high hat:1, closed high hat:2, snare: 3, clap: 4

preset_info = [[0, 0], [2, 0.25], [3, 0.5], [2, 0.75]];

preset_info = [[0, 0], [0, 0.1875], [0, 0.4375], [0, 0.5], [0, 0.625], [3, 0.25], [3, 0.75], [3, 0.875], [3, 0.9375], 
[2, 0], [2, 0.125], [2, 0.1875], [2, 0.25], [2, 0.375], [2, 0.4375], [2, 0.5], [2, 0.625], [2, 0.6875], [2, 0.75], [2, 0.875], [2, 0.9375]];

let Interval_info : NodeJS.Timeout [] = [];

function play_preset_sync(): void
{
  let start_preset_sync_index : number = 0;

  if (audio_main != null)
  {
    while(sync_time_1[start_preset_sync_index] < audio_main.currentTime)
    {
      start_preset_sync_index++;
      console.log(sync_time_1[start_preset_sync_index])
      console.log(audio_main.currentTime)
    }
  }

  var wait_time : number = 0
  if (audio_main != null)
    wait_time = (sync_time_1[start_preset_sync_index] - audio_main.currentTime) * 1000

  setTimeout(
    function(){
      play_preset()
      console.log(wait_time)
    },
    wait_time - 250
  )
}

function play_preset(): void // no ';' here
{
  if (Interval_info.length != 0)
  {
    for(var i=0; i<Interval_info.length; i++)
    {
      clearInterval(Interval_info[i])
    }
    Interval_info = [];
    return;
  }

  let bpm : number = 95;
  let one_bar_length : number = 60 / bpm * 4;

  let pre_position : number = 0;
  
  //setTimeout(function(){}, preset_info[0][1] * one_bar_length * 1000);
  //audio_0.play()
  //setTimeout(function(){play_instrument2(audio_3)}, 1000);
  //setTimeout(function(){audio_4.play()}, 500);
  let start_preset_sync_index : number = 0;
  /*
  if (audio_main != null)
  {
    while(sync_time_1[start_preset_sync_index] < audio_main.currentTime)
    {
      start_preset_sync_index++;
      console.log(sync_time_1[start_preset_sync_index])
      console.log(audio_main.currentTime)
    }
  }
  var wait_time : number = 0
  if (audio_main != null)
    //wait_time = (sync_time_1[start_preset_sync_index] - audio_main.currentTime) * 1000
  */
  for(var i=0; i<preset_info.length; i++)
  {
    let audio_t = audio_list[preset_info[i][0]];
    setTimeout(function(){
        play_instrument2(audio_t)
    },
    preset_info[i][1] * one_bar_length * 1000);
  }

  if (audio_main != null)
  { 
    for(var i=0; i<preset_info.length; i++)
    {
      let audio_t = audio_list[preset_info[i][0]];

      setTimeout(function(){
      Interval_info.push(
        setInterval(
        function() {
          play_instrument2(audio_t)
        },
        one_bar_length * 1000
      ))
      },
      preset_info[i][1] * one_bar_length * 1000)
    }
  }
  

/*
  setTimeout(function(){}, preset_info[0][1] * one_bar_length * 1000);
  play_instrument(preset_info[0][0], one_bar_length)

  setInterval(
    function() {
      console.log("one")
    },
    1000
  )
  setTimeout(function(){}, 500);
  setInterval(
    function() {
      console.log("two")
    },
    1000
  )
  for(var i=1; i<preset_info.length; i++)
  {
    setTimeout(function(){},(preset_info[i][1] - preset_info[i - 1][1]) * one_bar_length * 1000);
    play_instrument(preset_info[i][0], one_bar_length)
  }
*/
  //play_instrument(0, one_bar_length);
}

function play_instrument(instrument : number, term : number) : void
{
  let audio_t : HTMLAudioElement;
  //let inst_path : string = './drum/'.concat(instrument.toString(),'.wav')
  if (instrument === 0)
    audio_t = new Audio(require('./drum/0.wav'));
  else if (instrument === 1)
    audio_t = new Audio(require('./drum/1.wav'));
  else if (instrument === 2)
    audio_t = new Audio(require('./drum/2.wav'));
  else if (instrument === 3)
  {
    audio_t = new Audio(require('./drum/3.wav'));
    //audio_t.volume = 0.3;
  }
  else if (instrument === 4)
    audio_t = new Audio(require('./drum/4.wav'));
  
  setInterval(
    function() {
      audio_t.currentTime = 0;
      audio_t.play();
    },
    1000
  )
}

function play_instrument2(instrument : HTMLAudioElement) : void
{
  instrument.currentTime = 0;
  instrument.play();
}

//private onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
//  console.log(e.key)
//}

function beat_key_play (e: React.KeyboardEvent<HTMLDivElement>) : void
{

}

let handleKeyPress = (event : any) => {
  switch (event.key)
  {
    case 'q':
      play_0();
      break;
    case 'w':
      play_3();
      break;
    case 'e':
      play_2();
      break;
  }
}

function play_0() : void
{
  audio_0.currentTime = 0;
  audio_0.play()
}

function play_1() : void
{
  audio_1.currentTime = 0;
  audio_1.play()
}

function play_2() : void
{
  audio_2.currentTime = 0;
  audio_2.play()
}

function play_3() : void
{
  audio_3.currentTime = 0;
  audio_3.play()
}

function play_4() : void
{
  audio_4.currentTime = 0;
  audio_4.play()
}


export default App;
