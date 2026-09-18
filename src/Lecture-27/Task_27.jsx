import React from 'react'
import Counter from './Counter'
import Header from './Header'
import ErrorBoundary from './ErrorBoundary'
import ProblemComponent from './ProblemComponent'
import Footer from './Footer'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import EnvironmentInfo from './EnvironmentInfo'

function Task_27() {

  const appName = import.meta.env.VITE_APP_NAME;
  const apiUrl = import.meta.env.VITE_API_URL;
  const version = import.meta.env.VITE_APP_VERSION;
  return (
    <>
      {/* <Header />
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary> */}

      {/* <Header />

      <h2>Welcome to my application</h2>

      <ErrorBoundary>
        <ProblemComponent />
      </ErrorBoundary>

      <Sidebar/>

      <Footer /> */}


      {/* <ErrorBoundary section="Header">
        <Header />
      </ErrorBoundary>

      <ErrorBoundary section="Sidebar">
        <Sidebar />
      </ErrorBoundary>

      <ErrorBoundary section="Main Content">
        <MainContent />
      </ErrorBoundary>

      <ErrorBoundary section="Footer">
        <Footer />
      </ErrorBoundary> */}


      <h1>{appName}</h1>

      <p>API URL: {apiUrl}</p>

      <p>Version: {version}</p>

      <EnvironmentInfo />
    </>
  )
}

export default Task_27