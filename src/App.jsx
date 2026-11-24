import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './home.jsx'
import ADD from './add.jsx'
import {Routes,Route} from "react-router-dom"

function App() {
  const [jobs,setJobs]=useState([]);

  const addJob = (newJob) => {
    setJobs([...jobs,newJob])
  }

  return (
    // <>

    //   {/* <Home/> */}
    //   <ADD onSave={addJob}/>
    // </>
    <Routes>
      <Route path='/' element={<Home job={jobs}/>} />
      <Route path="/add" element={ <ADD onSave={addJob}/>} />
    </Routes>
  )
}

export default App
