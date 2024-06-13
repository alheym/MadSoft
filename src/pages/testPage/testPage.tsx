import RefreshIcon from '@mui/icons-material/Refresh'
import { FC, useEffect, useState } from 'react'

import { TestSection } from '@components/organisms'

import { mockQuestions } from '@mocks/mock'
import { Answer, QuestionsData } from '@utils/validation'
import { CompletedSection, Container, RefreshButton } from './styles'

export const TestPage: FC = () => {
  const [questions, setQuestions] = useState<QuestionsData>(mockQuestions)

  const [isCompleted, setIsCompleted] = useState(() => {
    const storedIsCompleted = localStorage.getItem('completed')
    return storedIsCompleted ? JSON.parse(storedIsCompleted) : false
  })

  const [currentStep, setCurrentStep] = useState(() => {
    const storedStep = localStorage.getItem('currentStep')
    return storedStep ? parseFloat(storedStep) : 0
  })

  const [answers, setAnswers] = useState<Answer[]>(() => {
    const storedAnswers = localStorage.getItem('testAnswers')
    return storedAnswers ? JSON.parse(storedAnswers) : []
  })

  useEffect(() => {
    const savedAnswers = localStorage.getItem('testAnswers')
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers))
    }
  }, [])

  useEffect(() => {
    const savedStep = localStorage.getItem('currentStep')
    if (savedStep) {
      setCurrentStep(parseInt(savedStep, 10))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('testAnswers', JSON.stringify(answers))
  }, [answers])

  useEffect(() => {
    localStorage.setItem('currentStep', currentStep.toString())
  }, [currentStep])

  useEffect(() => {
    localStorage.setItem('completed', isCompleted.toString())
  }, [isCompleted])

  const handleAnswerChange = (answer: Answer) => {
    const updatedAnswers = [...answers]
    const answerIndex = updatedAnswers.findIndex(a => a.questionId === answer.questionId)

    if (answerIndex > -1) {
      updatedAnswers[answerIndex] = answer
    } else {
      updatedAnswers.push(answer)
    }
    setAnswers(updatedAnswers)
  }

  const handleNext = () => {
    if (currentStep < questions.questions.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleCompletion = () => {
    setIsCompleted(true)
  }

  const handleRefresh = () => {
    setIsCompleted(false)
    localStorage.clear()
    setQuestions(mockQuestions)
    setCurrentStep(0)
    setAnswers([])
  }

  return (
    <Container>
      {isCompleted ? (
        <CompletedSection>
          <h1>Tест пройден</h1>
          <RefreshButton onClick={handleRefresh} size="large">
            <RefreshIcon sx={{ fontSize: 56 }} />
          </RefreshButton>
        </CompletedSection>
      ) : (
        <TestSection
          questionsData={questions}
          currentStep={currentStep}
          answers={answers}
          handleAnswerChange={handleAnswerChange}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          handleCompletion={handleCompletion}
        />
      )}
    </Container>
  )
}
