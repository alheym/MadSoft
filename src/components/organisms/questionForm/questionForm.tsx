import { FC } from 'react'

import { LongAnswerQuestion, MultipleChoiceQuestion, ShortAnswerQuestion, SingleChoiceQuestion } from '@components/molecules'
import type { QuestionFormProps } from './types'

export const QuestionForm: FC<QuestionFormProps> = ({ question, answer, onAnswerChange }) => {
  switch (question.type) {
    case 'single-choice':
      return <SingleChoiceQuestion question={question} answer={answer} onAnswerChange={onAnswerChange} />
    case 'multiple-choice':
      return <MultipleChoiceQuestion question={question} answer={answer} onAnswerChange={onAnswerChange} />
    case 'short-answer':
      return <ShortAnswerQuestion question={question} answer={answer} onAnswerChange={onAnswerChange} />
    case 'long-answer':
      return <LongAnswerQuestion question={question} answer={answer} onAnswerChange={onAnswerChange} />
    default:
      return null
  }
}
