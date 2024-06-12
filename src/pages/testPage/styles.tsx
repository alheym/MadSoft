import { Box, Button } from '@mui/material'
import styled, { css } from 'styled-components'

interface StepProps {
  currentStep: boolean
}

export const Container = styled(Box)`
  display: flex;
  height: 400px;
  width: 800px;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  justify-content: space-between;
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: end;
  justify-content: end;
  flex-direction: column;
`

export const NavigationButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  justify-content: end;
`

export const NavigationButton = styled(Button)`
  height: 40px;
  min-width: 56px;
`
export const StepsInfo = styled.div`
  display: flex;
  gap: 6px;
  height: 40px;
`

const StepStyle = css<StepProps>`
  height: 4px;
  width: 50px;
  background-color: ${({ currentStep }) => (currentStep ? 'aqua' : 'gray')};
`

export const Step = styled.div<StepProps>`
  ${StepStyle}
`
