import React,{useState} from 'react'


export default function Textform(props) {
const upper = ()=>{
  let newtext=text.toUpperCase()
    setText(newtext)
}
const lower =()=>{
  let lowertext=text.toLowerCase()
  setText(lowertext)
}
const clear =()=>{
  let cleartext=''
  setText(cleartext)
}
const change=(event)=>{
setText(event.target.value)
}

  const[text, setText]=useState()
 // setText("enter ur new text here")
  return (
    <>
  <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
    <label className="form-label"><h1>{props.heading}</h1></label>
    <textarea className="form-control" onChange={change} style={{background: props.mode==='light'?'white':'grey',color: props.mode==='light'?'black':'white'}} rows="8" value={text} id="exampleInputEmail1"/>
    </div>
    <button className='btn btn-primary my-3 mx-3' onClick={upper}>Change to Uppercase</button>
    <button className='btn btn-primary my-3 mx-3' onClick={lower}>Change to Lowercase</button>
    <button className='btn btn-primary my-3 mx-3' onClick={clear}>Clear Text</button>
    
</>
  )
}
