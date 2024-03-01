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
      <div className="w-[15rem] h-[3rem] flex justify-start py-3 pl-8 pr-8 gap-5 bg-gradient-to-r from-slate-800 to-stone-800 hover:bg-gradient-to-br hover:from-stone-700 hover:to-stone-400 shadow-md rounded-br-full shadow-stone-950 hover:translate-x-2 transition duration-500 ease-in-out delay-400">
        <button onClick={handleMute} className="hover:text-amber-400">
          {isMuted ? <RxSpeakerLoud /> : <RxSpeakerOff />}
        </button>
        <button onClick={handlePreviousSong} className="hover:text-amber-400">
          <TbPlayerTrackPrev />
        </button>
        <button onClick={handlePlayPause} className="hover:text-amber-400">
          {isPlaying ? <TbPlayerPause /> : <TbPlayerPlay />}
        </button>
        <button onClick={handleNextSong} className="hover:text-amber-400">
          <TbPlayerTrackNext />
        </button>
      </div>
    </div>
  )
}

export default MusicPlayer
