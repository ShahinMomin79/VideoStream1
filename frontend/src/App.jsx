import { useState } from 'react'

import './App.css'
import VideoPlayer from './VideoPlayer'
import {uesRef} from 'react'
import { useRef } from 'react'

function App() {
 const playerRef=useRef(null)
 const videoLink="http://localhost:8000/uploads/courses/e22e9e3e-bf54-4fc9-9173-68c723d0a83d/index.m3u8"

 const videoPlayerOptions={
  controls:true,
  responsive:true,
  fluid:true,
  sources:[
    {
      src:videoLink,
      type:"application/x-mpegURL"
    }
  ]
 }
   const handlePlayerReady=(player)=>{
    playerRef.current=player;
    player.on("waiting",()=>{
      videojs.log("player is waiting");
    });
    player.on("dispose",()=>{
      videojs.log("player will dispose");
    });

   };
  return (
    <>
    <div>
    <h1>Video player</h1>
    </div>
    <VideoPlayer options={videoPlayerOptions}
    onReady={handlePlayerReady} />
    </>
  )
}

export default App
