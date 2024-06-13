import { Box, Button } from '@mui/material'
import styled from 'styled-components'

export const Container = styled(Box)`
  display: flex;
  height: 400px;
  width: 800px;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  justify-content: space-between;
`
export const CompletedSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  height: 100%;

  h1 {
    width: max-content;
    font-size: 56px;
  }
`
export const RefreshButton = styled(Button)``
