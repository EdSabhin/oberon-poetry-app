import React, { useEffect, useRef, useState } from "react"

import { songData } from "@/service/songData"

import {
  TbPlayerPause,
  TbPlayerPlay,
  TbPlayerTrackPrev,
  TbPlayerTrackNext,
} from "react-icons/tb"

import { RxSpeakerLoud, RxSpeakerOff } from "react-icons/rx"
import mainProps from "@/component-props/mainProps"

type Props = {
  bloodNight?: boolean
}

const MusicPlayer = ({ bloodNight }: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [isMuted, setIsMuted] = useState<boolean>(true)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const audioRef = useRef<any>(null)

  const attemptPlay = () => {
    audioRef &&
      audioRef.current &&
      audioRef.current.play().catch((error: any) => {
        console.error("Error attempting to play", error)
      })
  }

  useEffect(() => {
    attemptPlay()
  }, [])

  const handleMute = () => {
    setIsMuted(!isMuted)
    if (!isMuted) {
      audioRef.current.muted = !audioRef.current.muted
    } else {
      audioRef.current.muted = !audioRef.current.muted
    }
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
  }

  const handleNextSong = () => {
    let newIndex = currentSongIndex + 1

    if (newIndex >= songData.length) {
      newIndex = 0
    }

    setCurrentSongIndex(newIndex)
  }

  const handlePreviousSong = () => {
    let newIndex = currentSongIndex - 1

    if (newIndex < 0) {
      newIndex = songData.length - 1
    }

    setCurrentSongIndex(newIndex)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <audio ref={audioRef} src={songData[currentSongIndex].src} autoPlay />
      <div
        className={`${bloodNight ? mainProps.shakespeare.bloodNight.musicPlayer.class : mainProps.shakespeare.playwright.musicPlayer.class}`}
      >
        <button
          onClick={handleMute}
          className={`${bloodNight ? mainProps.shakespeare.bloodNight.musicPlayer.buttonClass : mainProps.shakespeare.playwright.musicPlayer.buttonClass}`}
        >
          {isMuted ? <RxSpeakerLoud /> : <RxSpeakerOff />}
        </button>
        <button
          onClick={handlePreviousSong}
          className={`${bloodNight ? mainProps.shakespeare.bloodNight.musicPlayer.buttonClass : mainProps.shakespeare.playwright.musicPlayer.buttonClass}`}
        >
          <TbPlayerTrackPrev />
        </button>
        <button
          onClick={handlePlayPause}
          className={`${bloodNight ? mainProps.shakespeare.bloodNight.musicPlayer.buttonClass : mainProps.shakespeare.playwright.musicPlayer.buttonClass}`}
        >
          {isPlaying ? <TbPlayerPause /> : <TbPlayerPlay />}
        </button>
        <button
          onClick={handleNextSong}
          className={`${bloodNight ? mainProps.shakespeare.bloodNight.musicPlayer.buttonClass : mainProps.shakespeare.playwright.musicPlayer.buttonClass}`}
        >
          <TbPlayerTrackNext />
        </button>
      </div>
    </div>
  )
}

export default MusicPlayer
