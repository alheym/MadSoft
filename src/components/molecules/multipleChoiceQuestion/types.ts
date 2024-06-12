import { Answer, Question } from '@utils/validation'

export interface MultipleChoiceQuestionProps {
  question: Question
  answer?: Answer
  onAnswerChange: (answer: Answer) => void
}
