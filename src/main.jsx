import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from "react-helmet-async";
import StudentProvider from './Lecture-15/Student-project/Context/Lac15_StudentContext.jsx'
import ThemeProvider from './Lecture-15/Student-project/Context/Lac15_ThemeContext.jsx'
import AuthProvider from './Lecture-15/Student-project/Context/Lac15_AuthContext.jsx'
import { Provider } from 'react-redux';
import store from './Lecture-30/Store/Store.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <AuthProvider> */}
      {/* <ThemeProvider> */}
        {/* <StudentProvider> */}
          {/* <HelmetProvider> */}
          <Provider store={store}>
            <App />
          </Provider>
          {/* </HelmetProvider> */}
        {/* </StudentProvider> */}
      {/* </ThemeProvider> */}
    {/* </AuthProvider> */}
  </BrowserRouter>

)
