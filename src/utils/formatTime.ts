export const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60000)
  const seconds = Math.floor((time % 60000) / 1000)

  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

  return `${formattedMinutes}:${formattedSeconds}`
}
