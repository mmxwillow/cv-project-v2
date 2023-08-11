import { useState } from 'react'
import Preview from './components/Preview'
import Edit from './components/Edit'
import './styles/App.css'

function App() {
  const [currentView, setCurrentView] = useState('Edit');

  const changeView = () =>{
    const newView = (currentView === 'Edit') ? 'Preview' : 'Edit';
    setCurrentView(newView); 
  }

  return (
    <>
      <h1>CV App</h1>
      <button onClick={changeView}>{currentView}</button>
      {(currentView === 'Edit') ? <Preview /> : <Edit /> }
    </>
  )
}

export default App
