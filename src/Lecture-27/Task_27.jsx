import React from 'react'
import Counter from './Counter'
import Header from './Header'
import ErrorBoundary from './ErrorBoundary'
import ProblemComponent from './ProblemComponent'
import Footer from './Footer'
import Sidebar from './Sidebar'
import MainContent from './MainContent'

function Task_27() {
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


      <ErrorBoundary section="Header">
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
      </ErrorBoundary>


    </>
  )
}

export default Task_27