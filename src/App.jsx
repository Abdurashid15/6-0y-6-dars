
import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import FirstForm from './components/FirstForm'
import PhotosApp from './components/PhotosApp'
import RefForm from './components/RefForm'

function App() {
  return (
    <>
  <header>
  <NavLink to='/'>FirstForm</NavLink>
  <NavLink to='/refform'>RefForm</NavLink>
  <NavLink to='/photosapp'>PhotosApp</NavLink>
  </header>
    


    <Routes>
      <Route path='/'element={<FirstForm></FirstForm>}></Route>
      <Route path='/refform'element={<RefForm></RefForm>}></Route>
      <Route path='/photosapp'element={<PhotosApp></PhotosApp>}></Route>
    </Routes>
    </>
  )
}

export default App
