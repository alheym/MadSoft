import { FC, useCallback, useEffect, useMemo, useState } from 'react'

import { QuestionForm, Timer } from '@components/organisms'
import DoneIcon from '@mui/icons-material/Done'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Container, HeaderSteps, NavigationButton, NavigationButtonContainer, StartButtonWrapper, Step, StepsInfo } from './styles'
import type { TestSectionProps } from './types'

export const TestSection: FC<TestSectionProps> = ({
  questionsData,
  currentStep,
  answers,
  handleAnswerChange,
  handleNext,
  handlePrevious,
  handleCompletion,
}) => {
  const { questions, time } = questionsData

  const [testStarted, setTestStarted] = useState(() => {
    const storedTestStarted = localStorage.getItem('testStarted')
    return storedTestStarted ? JSON.parse(storedTestStarted) : false
  })

  useEffect(() => {
    localStorage.setItem('testStarted', testStarted.toString())
  }, [testStarted])

  const startTest = () => {
    setTestStarted(true)
  }

  const handleStart = () => {
    if (!testStarted) startTest()
  }

  const handleComplete = useCallback(() => {
    setTestStarted(false)
    handleCompletion()
  }, [handleCompletion])

  const answer = useMemo(() => {
    return questions.length > 0 ? answers.find(a => a.questionId === questions[currentStep].id) : undefined
  }, [questions, currentStep])

  const isUnanswered = (index: number) => {
    if (index < currentStep && !answers.find(a => a.questionId === questions[index].id)) {
      return true
    }
    return false
  }

  return (
    <Container>
      {testStarted ? (
        <>
          <HeaderSteps>
            <StepsInfo>
              {questions.map((question, index) => {
                const unansweredStep = isUnanswered(index)
                return <Step key={index} $currentStep={index === currentStep} $unansweredStep={unansweredStep} />
              })}
            </StepsInfo>
            <Timer initialTime={time} onExpire={handleComplete} />
          </HeaderSteps>
          {questions.length > 0 && <QuestionForm question={questions[currentStep]} answer={answer} onAnswerChange={handleAnswerChange} />}
          <NavigationButtonContainer>
            <NavigationButton onClick={handlePrevious} disabled={currentStep === 0}>
              <NavigateBeforeIcon sx={{ fontSize: 40 }} />
            </NavigationButton>
            {currentStep === questions.length - 1 ? (
              <NavigationButton onClick={handleComplete} color="success">
                <DoneIcon color="success" fontSize="large" />
              </NavigationButton>
            ) : (
              <NavigationButton onClick={handleNext} disabled={currentStep === questions.length - 1}>
                <NavigateNextIcon sx={{ fontSize: 40 }} />
              </NavigationButton>
            )}
          </NavigationButtonContainer>
        </>
      ) : (
        <StartButtonWrapper>
          <NavigationButton onClick={handleStart} size="large" variant="outlined">
            Начать тест
          </NavigationButton>
        </StartButtonWrapper>
      )}
    </Container>
  )
}
