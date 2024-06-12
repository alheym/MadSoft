import { zodResolver } from '@hookform/resolvers/zod'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Answer, answerSchema } from '@utils/validation'
import type { MultipleChoiceQuestionProps } from './types'

export const MultipleChoiceQuestion: FC<MultipleChoiceQuestionProps> = ({ question, answer, onAnswerChange }) => {
  const { control, getValues, setValue } = useForm<Answer>({
    defaultValues: answer,
    resolver: zodResolver(answerSchema),
  })

  const handleCheckboxChange = (option: string, isChecked: boolean) => {
    const currentValue = (getValues('answer') as string[]) || []

    let updatedValue: string[] = []
    if (isChecked) {
      updatedValue = [...currentValue, option]
    } else {
      updatedValue = currentValue.filter((val: string) => val !== option)
    }

    setValue('answer', updatedValue)
    onAnswerChange({ questionId: question.id, answer: updatedValue })
  }

  return (
    <form>
      <h3>{question.questionText}</h3>
      <FormGroup>
        {question.options?.map(option => (
          <Controller
            key={option}
            name="answer"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    {...field}
                    checked={Array.isArray(field.value) ? field.value.includes(option) : false}
                    onChange={e => handleCheckboxChange(option, e.target.checked)}
                  />
                }
                label={option}
              />
            )}
          />
        ))}
      </FormGroup>
    </form>
  )
}
