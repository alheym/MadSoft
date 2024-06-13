import { FC, useEffect, useRef, useState } from 'react'

import { formatTime } from '@utils/formatTime'

import { TimerWrapper } from './styles'
import type { TimerProps } from './types'

export const Timer: FC<TimerProps> = ({ initialTime, onExpire }) => {
  const [time, setTime] = useState(() => {
    const storedTestTime = localStorage.getItem('testTime')
    return storedTestTime ? parseInt(storedTestTime) : initialTime
  })
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime(prevTime => {
        if (prevTime <= 1000) {
          clearInterval(timerRef.current!)
          onExpire()
          return 0
        }
        return prevTime - 1000
      })
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('testTime', time.toString())
  }, [time])

  return <TimerWrapper>{formatTime(time)}</TimerWrapper>
}
