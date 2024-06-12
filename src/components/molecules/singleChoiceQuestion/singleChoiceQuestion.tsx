import { zodResolver } from '@hookform/resolvers/zod'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Answer, answerSchema } from '@utils/validation'
import { SingleChoiceQuestionProps } from './types'

export const SingleChoiceQuestion: FC<SingleChoiceQuestionProps> = ({ question, answer, onAnswerChange }) => {
  const { control, setValue } = useForm<Answer>({
    defaultValues: answer,
    resolver: zodResolver(answerSchema),
  })

  const handleRadioChange = (value: string) => {
    setValue('answer', value)
    onAnswerChange({ questionId: question.id, answer: value })
  }

  return (
    <form>
      <h3>{question.questionText}</h3>
      <Controller
        name="answer"
        control={control}
        render={({ field }) => (
          <RadioGroup {...field} value={field.value} onChange={e => handleRadioChange(e.target.value)}>
            {question.options?.map(option => <FormControlLabel key={option} value={option} control={<Radio />} label={option} />)}
          </RadioGroup>
        )}
      />
    </form>
  )
}
