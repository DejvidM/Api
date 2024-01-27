import { useEffect, useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route,Link, useNavigate} from 'react-router-dom';
import Home from './assets/Home';
import Word from './assets/Word';
import WordColor from './assets/WordColor';
import Number from './assets/Number';

const Display = ({setColor,setState}) =>{
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home');
  },[])
}

function App() {

  const [state ,setState] = useState('');
  const [color, setColor] = useState('');
  return (
    <BrowserRouter>
    <>
      <Routes>
        <Route path='/' element={<Display setColor={setColor} setState={setState}/>}/>
        <Route path='/home' element={<Home state={state} setState={setState} color={color} setColor={setColor}/>} />
        <Route path='/number' element={<Number state={state} setState={setState}/>} />
        <Route path='/word' element={<Word state={state} setState={setState}/>} />
        <Route path='/wordColor' element={<WordColor state={state} setState={setState} color={color} setColor={setColor}/>} />
      </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
