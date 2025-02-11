// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Classbasedcomponent from './COMPONENTS/Classbasedcomponent'
import Table from './COMPONENTS/table'
import Login from "./COMPONENTS/Login_form";
import Secondcomponent from './COMPONENTS/Secondcomponent';
import State from './COMPONENTS/state';
import Stopwatch from './COMPONENTS/stop_watch';
import Likes from './COMPONENTS/likes';
import Colour from './COMPONENTS/colour_change';
import Addmessage from './COMPONENTS/add_text';
import Calculator from './COMPONENTS/Calculater';
import Creation from './COMPONENTS/Mounting';
function App() {

  return (
  <>
  <Table name="vishnu123"/>
  <strong>----------------------------------------------------------------------------------------</strong>
  <Classbasedcomponent/>
  <strong>----------------------------------------------------------------------------------------</strong>
  <Login />
  <strong>----------------------------------------------------------------------------------------</strong>
  <Secondcomponent/>
  <strong>----------------------------------------------------------------------------------------</strong>
  <State/>
  <strong>----------------------------------------------------------------------------------------</strong>
  <Stopwatch/>
  <strong>----------------------------------------------------------------------------------------</strong>
  <Likes/>
  <strong>----------------------------------------------------------------------------------------</strong>
  <Colour/>
  <div style={{marginBottom:100}}>
  <Calculator/>
  </div>
  <div>
  <Addmessage/>
  </div>
  <Creation/>
  
    </>
  )
}


export default App
