import { z } from 'zod'

export type QuestionType = 'single-choice' | 'multiple-choice' | 'short-answer' | 'long-answer'

export interface QuestionsData {
  questions: Question[]
  time: number
}

export interface Question {
  id: number
  type: QuestionType
  questionText: string
  options?: string[]
}

export interface Answer {
  questionId: number
  answer: string | string[]
}

export const answerSchema = z.object({
  questionId: z.number(),
  answer: z.union([z.string(), z.array(z.string())]),
})
