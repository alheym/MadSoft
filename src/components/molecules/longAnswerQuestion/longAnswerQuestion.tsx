import { zodResolver } from '@hookform/resolvers/zod'
import { TextField } from '@mui/material'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Answer, answerSchema } from '@utils/validation'
import type { LongAnswerQuestionProps } from './types'

export const LongAnswerQuestion: FC<LongAnswerQuestionProps> = ({ question, answer, onAnswerChange }) => {
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
      <Controller
        name="answer"
        control={control}
        render={({ field }) => <TextField {...field} multiline rows={4} fullWidth onChange={handleTextFieldChange} value={field.value || ''} />}
      />
    </form>
  )
}
