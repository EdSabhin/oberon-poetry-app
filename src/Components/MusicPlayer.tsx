import React, { useEffect, useRef, useState } from "react"
import {
  TbPlayerPause,
  TbPlayerPlay,
  TbPlayerTrackPrev,
  TbPlayerTrackNext,
} from "react-icons/tb"
import { RxSpeakerLoud, RxSpeakerOff } from "react-icons/rx"

type Props = {
  songs: any
}

const MusicPlayer = ({ songs }: Props) => {
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

    if (newIndex >= songs.length) {
      newIndex = 0
    }

    setCurrentSongIndex(newIndex)
  }

  const handlePreviousSong = () => {
    let newIndex = currentSongIndex - 1

    if (newIndex < 0) {
      newIndex = songs.length - 1
    }

    setCurrentSongIndex(newIndex)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <audio ref={audioRef} src={songs[currentSongIndex].songSrc} autoPlay />
      <div className="flex justify-center p-3 gap-4 border-2 border-white hover:border-amber-100 transition rounded-md">
        <button onClick={handleMute}>
          {isMuted ? <RxSpeakerLoud /> : <RxSpeakerOff />}
        </button>
        <button onClick={handlePreviousSong}>
          <TbPlayerTrackPrev />
        </button>
        <button onClick={handlePlayPause}>
          {isPlaying ? <TbPlayerPause /> : <TbPlayerPlay />}
        </button>
        <button onClick={handleNextSong}>
          <TbPlayerTrackNext />
        </button>
      </div>
    </div>
  )
}

export default MusicPlayer
