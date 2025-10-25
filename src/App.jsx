
import './App.css'
import Navbar from './component/Navbar'
import Section from './component/Section'
import UserManagement from './component/UserManagment'

function App() {
  

  return (
    <>
      <div className='flex flex-col items-center  w-full overflow-hidden'>
       <Navbar/>
       <Section/>
       <UserManagement/>
        </div>
    </>
  )
}

export default App
