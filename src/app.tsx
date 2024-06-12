import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import HelloWorld from '@components/HelloWorld'
import { GlobalStyle } from './global-styles'

const container = document.getElementById('root') as HTMLElement

const initialChildren = (
  <StrictMode>
    <GlobalStyle />
    <HelloWorld />
  </StrictMode>
)

const root = createRoot(container)
root.render(initialChildren)
