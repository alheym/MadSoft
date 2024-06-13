import { QuestionsData } from '@utils/validation'

export const mockQuestions: QuestionsData = {
  questions: [
    { id: 1, type: 'single-choice', questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit?', options: ['Lorem', 'Ipsum', 'Dolor', 'Amet'] },
    { id: 2, type: 'multiple-choice', questionText: 'Tenetur quod quidem in voluptatem corporis dolorum dicta?', options: ['2', '3', '4', '5'] },
    { id: 3, type: 'short-answer', questionText: 'Incidunt vitae quae facere ducimus nostrum aliquid dolorum veritatis dicta?' },
    { id: 4, type: 'long-answer', questionText: 'Consequatur rerum amet fuga expedita sunt et tempora saepe?' },
    { id: 5, type: 'multiple-choice', questionText: 'Tenetur quod quidem in voluptatem corporis dolorum dicta?', options: ['21', '1', '77', '5'] },
    { id: 6, type: 'short-answer', questionText: 'Incidunt vitae quae facere ducimus nostrum aliquid dolorum veritatis dicta?' },
  ],
  time: 120000,
}
