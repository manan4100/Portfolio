import {Routes,Route} from 'react-router-dom'
import Home from './component/Home/Home'
import AboutMe from './component/AboutMe/AboutMe'
import Qualification from './component/Qualification/Qualification'
import ProfessionalDetails from './component/ProfessionalDetails/ProfessionalDetails'
import Ifam from './component/Ifam/Ifam'
import Contact from './component/Contact/Contact'



const router = () => {
  return (
    <>
        <Routes>
          <Route path='/home' element={<Home/>}/>
            <Route path='/aboutme' element={<AboutMe/>}/>
            <Route path='/qualification' element={<Qualification/>}/>
            <Route path='/professionaldetails' element={<ProfessionalDetails/>}/>
            <Route path='/ifam' element={<Ifam/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </>
  )
}

export default router