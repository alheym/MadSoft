import { Question } from '@utils/validation'

export const mockQuestions: Question[] = [
  { id: 1, type: 'single-choice', questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit?', options: ['Lorem', 'Ipsum', 'Dolor', 'Amet'] },
  { id: 2, type: 'multiple-choice', questionText: 'Tenetur quod quidem in voluptatem corporis dolorum dicta?', options: ['2', '3', '4', '5'] },
  { id: 3, type: 'short-answer', questionText: 'Incidunt vitae quae facere ducimus nostrum aliquid dolorum veritatis dicta?' },
  { id: 4, type: 'long-answer', questionText: 'Consequatur rerum amet fuga expedita sunt et tempora saepe?' },
]
