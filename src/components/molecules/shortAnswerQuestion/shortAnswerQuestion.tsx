import { zodResolver } from '@hookform/resolvers/zod'
import { TextField } from '@mui/material'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Answer, answerSchema } from '@utils/validation'
import type { ShortAnswerQuestionProps } from './types'

export const ShortAnswerQuestion: FC<ShortAnswerQuestionProps> = ({ question, answer, onAnswerChange }) => {
  const { control, setValue } = useForm<Answer>({
    defaultValues: answer,
    resolver: zodResolver(answerSchema),
  })

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValue('answer', value)
    onAnswerChange({ questionId: question.id, answer: value })
  }

  return (
    <form>
      <h3>{question.questionText}</h3>
      <Controller name="answer" control={control} render={({ field }) => <TextField {...field} fullWidth onChange={handleTextFieldChange} />} />
    </form>
  )
}
