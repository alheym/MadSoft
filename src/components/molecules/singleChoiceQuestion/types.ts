import { Answer, Question } from '@utils/validation'

export interface SingleChoiceQuestionProps {
  question: Question
  answer?: Answer
  onAnswerChange: (answer: Answer) => void
}
