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
      phone:'',
    },
    education: [],
    experience: []
  })

  const changeView = () =>{
    const newView = (currentView === 'Edit') ? 'Preview' : 'Edit';
    setCurrentView(newView); 
  }


  return (
    <>
      <h1>CV App</h1>
      <button onClick={changeView}>{currentView}</button>
      <div id="cv">
      {(currentView === 'Edit') ? <Preview cv={cv}/> : <Edit cv={cv}/> }
      {console.log(cv)}
      </div>
    </>
  )
}

export default App
