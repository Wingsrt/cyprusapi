import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

const [list,setlist]=useState('')

const [wow,setwow]=useState('')


function handel(){
 
   setwow(list)

}

  return (
    <>
   <input   onChange={(e)=>setlist(e.target.value)} type="text"/>
    
    <button className='but' onClick={handel}  >click</button>
    <div>{wow}</div>
    
    </>
  );
}

export default App;
