import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { GlobalStyle } from './global-styles'
import { TestPage } from './pages'

const container = document.getElementById('root') as HTMLElement

const initialChildren = (
  <StrictMode>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/" element={<TestPage />} />
      </Routes>
    </Router>
  </StrictMode>
)

const root = createRoot(container)
root.render(initialChildren)
