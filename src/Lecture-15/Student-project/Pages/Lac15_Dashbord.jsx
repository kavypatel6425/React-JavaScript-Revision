import React, { useContext } from 'react'
import Lac15_StudentList from '../Componats/Lac15_StudentList'
import Lac15_Header from '../Componats/Lac15_Header'
import Lac15_Footer from '../Componats/Lac15_Footer'
import Lac15_StudentDetails from '../Componats/Lac15_StudentDetails'
import "../CSS/Style.css"
import { ThemeContext } from '../Context/Lac15_ThemeContext'
import Lac15_StudentForm from '../Componats/Lac15_StudentForm'

function Lac15_Dashbord() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
        <Lac15_Header/>
        <Lac15_StudentList/>
        <Lac15_StudentDetails/>
        <Lac15_StudentForm/>
        <Lac15_Footer/>
    </div>
  )
}

export default Lac15_Dashbord