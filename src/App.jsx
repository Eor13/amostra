import './App.css'
import { FunctionComponentCard } from './functionComponentCard'
import { FunctionComponentTitle } from './functionComponentTitle'

function App() {

  return (
    <div className='container-master'> 
      <FunctionComponentTitle/>
      <FunctionComponentCard CardNumber='1'/>
      <FunctionComponentCard CardNumber ='2'/>
    </div>
  )
}

export default App
