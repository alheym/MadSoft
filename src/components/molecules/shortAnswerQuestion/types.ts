import { Answer, Question } from '@utils/validation'

export interface ShortAnswerQuestionProps {
  question: Question
  answer?: Answer
  onAnswerChange: (answer: Answer) => void
}
