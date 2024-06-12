import { Answer, Question } from '@utils/validation'

export interface LongAnswerQuestionProps {
  question: Question
  answer?: Answer
  onAnswerChange: (answer: Answer) => void
}
