import {  useState } from 'react'
import './App.css'
import SearchPart from './assets/SearchPart'
import Display from './assets/Display'
import {BrowserRouter, Routes , Route} from 'react-router-dom'

const DisplayNothing = () => {
  
  return (
    <>
    </>
  )
}

function App() {

  const [ id , setID] = useState('0');
  const [info , setInfo ] = useState('people');
  const [ api ,setApi] = useState([]);


  return (
    <BrowserRouter>
    <>
      <SearchPart id={id} setID={setID} info={info} setInfo={setInfo} api={api} setApi={setApi}></SearchPart>
      <Routes>
          <Route path='/' element={<DisplayNothing />} />
          <Route path='/:first/:second' element={<Display api={api} setApi={setApi}/>} />
      </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
