import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, {useState} from 'react';
import {
  BrowserRouter,
  Route,
  Routes 
} from "react-router-dom";

function App() {
  const [alert,setAlert]=useState(null)
const showAlert=(message,type)=>{
   setAlert({
    message:message,
    type:type
   })
}


//setInterval(() => {
 // document.title='TextUtils is amazing'
//}, 2000);
//setInterval(() => {
//  document.title='Install TextUtils '
//}, 1500);


setTimeout(() => {
  setAlert(null)
}, 3000);

  const [mode,setMode]=useState('light')
  const changemode=()=>{
   if(mode==='light'){
    setMode('dark');
    document.body.style.background='#020420'
    showAlert(' Dark mode has been enabled','success')
   }else{
    setMode('light');
        document.body.style.background='white'
        showAlert(' Light mode has been enabled','success')
   }
  }
  return (
    <>
  <BrowserRouter>
  
   <Navbar title='TextUtils' abt='About Us' mode={mode} changemode={changemode}/>
   <Alert alert={alert}/>
   <Routes>
   <Route exact path='/' element={<div className='container my-3'><Textform heading='Enter your text here'  mode={mode}/> </div>}></Route>
   
  
   <Route exact path='/about' element={<About/>}>         
           </Route>
            </Routes>
           
            </BrowserRouter>
   </>
  );
}

export default App;
