import { Button } from '@mui/material'
import styled, { css } from 'styled-components'

import type { StepProps } from './types'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const StepsInfo = styled.div`
  display: flex;
  gap: 6px;
`

const StepStyle = css<StepProps>`
  height: 4px;
  width: 50px;
  background-color: ${({ $currentStep, $unansweredStep }) => ($currentStep ? 'aqua' : $unansweredStep ? 'red' : 'gray')};
`

export const Step = styled.div<StepProps>`
  ${StepStyle}
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
export const Timer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 40px;
  background-color: grey;
  border-radius: 4px;
  color: white;
  font-size: 20px;
  font-weight: 500;
`
export const HeaderSteps = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 20px;
`
export const StartButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
