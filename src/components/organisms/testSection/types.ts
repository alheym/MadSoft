import { Answer, QuestionsData } from '@utils/validation'

export interface TestSectionProps {
  questionsData: QuestionsData
  currentStep: number
  answers: Answer[]
  handleAnswerChange: (answer: Answer) => void
  handleNext: () => void
  handlePrevious: () => void
  handleCompletion: () => void
}

export interface StepProps {
  $currentStep: boolean
  $unansweredStep: boolean
}
