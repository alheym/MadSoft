import { FC, useEffect, useRef, useState } from 'react'

import { formatTime } from '@utils/formatTime'

import { TimerWrapper } from './styles'
import type { TimerProps } from './types'

export const Timer: FC<TimerProps> = ({ initialTime, onExpire }) => {
  const [time, setTime] = useState(() => {
    const storedTestTime = localStorage.getItem('testTime')
    const storedStartTime = localStorage.getItem('startTime')
    const startTime = storedStartTime ? parseInt(storedStartTime) : Date.now()
    const elapsedTime = Date.now() - startTime
    const remainingTime = initialTime - elapsedTime

    return storedTestTime ? parseInt(storedTestTime) : remainingTime
  })

  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const startTime = localStorage.getItem('startTime') ? parseInt(localStorage.getItem('startTime')!) : Date.now()
    if (!localStorage.getItem('startTime')) {
      localStorage.setItem('startTime', startTime.toString())
    }

    timerRef.current = setInterval(() => {
      const elapsedTime = Date.now() - startTime
      const remainingTime = initialTime - elapsedTime

      setTime(remainingTime)

      if (remainingTime <= 0) {
        clearInterval(timerRef.current!)
        onExpire()
        setTime(0)
      }
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [initialTime, onExpire])

  useEffect(() => {
    localStorage.setItem('testTime', time.toString())
  }, [time])

  return <TimerWrapper>{formatTime(time)}</TimerWrapper>
}
