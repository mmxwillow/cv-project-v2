import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
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

  const addExperienceItem = (e) => {
    const emptyItem = {
      id: uuidv4(),
      company: '',
      position: '',
      description: '',
      date: '',
    }
    setCV({
        ...cv,
        experience: [...cv.experience,emptyItem],
    })
  }

  const updateExperienceItem = (e) => {
    let id = e.target.parentElement.getAttribute('data-key');

    setCV(
      {
        ...cv,
        experience: cv.experience.map(item => {
          if(item.id == id){
            return {...item, [e.target.name]: e.target.value};
          } else {
            return item;
          }
        })
      }
    )
  }

  const deleteExperienceItem = (e) => {
    let id = e.target.parentElement.getAttribute('data-key');
    
    setCV(
      {
        ...cv,
        experience: cv.experience.filter(item => item.id != id),
    })
  }

  const addEducationItem = () => {
    const emptyItem = {
      id: uuidv4(),
      name: '',
      title: '',
      date: '',
    }
    setCV({
        ...cv,
        education: [...cv.education,emptyItem],
    })
  }

  const updateEducationItem = (e) => {
    let id = e.target.parentElement.getAttribute('data-key');

    setCV(
      {
        ...cv,
        education: cv.education.map(item => {
          if(item.id == id){
            return {...item, [e.target.name]: e.target.value};
          } else {
            return item;
          }
        })
      }
    )
  }

  const deleteEducationItem = (e) => {
    let id = e.target.parentElement.getAttribute('data-key');
    
    setCV(
      {
        ...cv,
        education: cv.education.filter(item => item.id != id),
    })
  }


  return (
    <div className='App'>
      <h1>CV App</h1>
      <button onClick={changeView}>{currentView}</button>
      <div id="cv">
      {(currentView === 'Edit') ? <Preview cv={cv}/> : <Edit cv={cv} updateGeneral={updateGeneral} updateExperienceItem={updateExperienceItem} deleteExperienceItem={deleteExperienceItem} addExperienceItem={addExperienceItem} updateEducationItem={updateEducationItem} deleteEducationItem={deleteEducationItem} addEducationItem={addEducationItem}/> }
      </div>
    </div>
  )
}

export default App
