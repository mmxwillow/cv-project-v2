import { useState } from 'react'
import Preview from './components/Preview'
import Edit from './components/Edit'
import './styles/App.css'

function App() {
  const [currentView, setCurrentView] = useState('Edit');

  const [cv, setCV] = useState({
    general: {
      name:'',
      email:'',
      number:'',
    },
    education: [],
    experience: []
  })

  const changeView = () =>{
    const newView = (currentView === 'Edit') ? 'Preview' : 'Edit';
    setCurrentView(newView); 
  }

  const updateGeneral = (e) => {
    setCV({
        ...cv,
        general: {
          ...cv.general,
          [e.target.name]: e.target.value,
        }
      }
    )
  }

  const updateExperienceItem = (e) => {

  }

  const updateEducationItem = (e) => {

  }

  const deleteExperienceItem = (e) => {

  }

  const deleteEducationItem = (e) => {

  }

  const addExperienceItem = (e) => {

  }

  const addEducationItem = (e) => {

  }


  return (
    <>
      <h1>CV App</h1>
      <button onClick={changeView}>{currentView}</button>
      <div id="cv">
      {(currentView === 'Edit') ? <Preview cv={cv}/> : <Edit cv={cv} updateGeneral={updateGeneral} updateExperienceItem={updateExperienceItem} deleteExperienceItem={deleteExperienceItem} addExperienceItem={addExperienceItem} updateEducationItem={updateEducationItem} deleteEducationItem={deleteEducationItem} addEducationItem={addEducationItem}/> }
      </div>
      {console.log(cv)}
    </>
  )
}

export default App
