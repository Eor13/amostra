import './App.css'
import { FunctionComponentCard } from './functionComponentCard'
import { FunctionComponentTitle } from './functionComponentTitle'

function App() {

  return (
    <div className='container-master'> 
      <FunctionComponentTitle/>
      <FunctionComponentCard CardNumber='1' CardFunction="Primeiro"/>
      <FunctionComponentCard CardNumber ='2'CardFunction="Segundo"/>
    </div>
  )
}

export default App
