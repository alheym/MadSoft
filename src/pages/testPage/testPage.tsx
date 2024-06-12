import DoneIcon from '@mui/icons-material/Done'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { FC, useEffect, useState } from 'react'

import { QuestionForm } from '@components/organisms'
import { mockQuestions } from '@constants/mock'
import { Answer, Question } from '@utils/validation'
import { Container, NavigationButton, NavigationButtonContainer, Step, StepsInfo } from './styles'

export const TestPage: FC = () => {
  const [questions, setQuestions] = useState<Question[]>(mockQuestions)

  const storedStep = localStorage.getItem('currentStep')
  const initialStep = storedStep ? parseFloat(storedStep) : 0
  const [currentStep, setCurrentStep] = useState(initialStep)

  const storedAnswers = localStorage.getItem('testAnswers')
  const initialAnswers: Answer[] = storedAnswers ? JSON.parse(storedAnswers) : []
  const [answers, setAnswers] = useState<Answer[]>(initialAnswers)

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
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleCompletion = () => {
    localStorage.clear()
    setQuestions(mockQuestions)
    setCurrentStep(0)
    setAnswers([])
  }

  const answer = questions.length > 0 ? answers.find(a => a.questionId === questions[currentStep].id) : undefined

  return (
    <Container>
      <StepsInfo>
        {questions.map((question, index) => (
          <Step key={index} currentStep={index === currentStep} />
        ))}
      </StepsInfo>

      {questions.length > 0 && <QuestionForm question={questions[currentStep]} answer={answer} onAnswerChange={handleAnswerChange} />}

      <NavigationButtonContainer>
        <NavigationButton onClick={handlePrevious} disabled={currentStep === 0}>
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </NavigationButton>
        {currentStep === questions.length - 1 ? (
          <NavigationButton onClick={handleCompletion} color="success">
            <DoneIcon color="success" fontSize="large" />
          </NavigationButton>
        ) : (
          <NavigationButton onClick={handleNext} disabled={currentStep === questions.length - 1}>
            <NavigateNextIcon sx={{ fontSize: 40 }} />
          </NavigationButton>
        )}
      </NavigationButtonContainer>
    </Container>
  )
}
