import { Answer, Question } from '@utils/validation'

export interface QuestionFormProps {
  question: Question
  answer?: Answer
  onAnswerChange: (answer: Answer) => void
}
