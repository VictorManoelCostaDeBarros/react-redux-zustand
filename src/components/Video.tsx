import ReactPlayer from 'react-player'
// import { next, useCurrentLesson } from "../store/slices/player"
// import { useAppDispatch, useAppSelector } from "../store"
import { Loader } from "lucide-react"
import { useCurrentLesson, useStore } from "../zustand-store"
// import { useCurrentLesson } from "../store/slices/player"

export function Video() {
  const { isLoading, next } = useStore(store => {
    return {
      isLoading: store.isLoading,
      next: store.next
    }
  })

  // const dispatch = useAppDispatch() 
  const { currentLesson } = useCurrentLesson() 
  // const isCourseLoading = useAppSelector(state => state.player.isLoading)

  function handlePlayNext() {
    next()
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {
        isLoading ? (
          <div className="flex h-full items-center justify-center">
            <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
          </div>
        ) : (
          <ReactPlayer 
            width="100%"
            height="100%"
            controls
            playing
            onEnded={handlePlayNext}
            url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
          />
        )
      }
    </div>
    )
}