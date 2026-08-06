import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StudentProvider from './Lecture-15/Student-project/Context/Lac15_StudentContext.jsx'
import ThemeProvider from './Lecture-15/Student-project/Context/Lac15_ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <StudentProvider>
        <App />
      </StudentProvider>
    </ThemeProvider>
  </BrowserRouter>

)
