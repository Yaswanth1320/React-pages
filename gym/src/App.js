import './App.css';
import SharedLayout from './Layouts/SharedLayout';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,RouterProvider} 
   from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login"
import About from "./pages/About"
import { HelpLayout } from './Layouts/HelpLayout';
import Faq from './pages/Help/Faq';
import { Conatct } from './pages/Help/Contact';
import Error from './pages/Error';
import { CareersLayout } from './Layouts/CareersLayout';
import Careers from './pages/careers/Careers';
import { careerLoader } from './pages/careers/Careers';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='help' element={<HelpLayout />}>
         <Route path='contact' element={<Conatct />}/>
          <Route path='faq' element={<Faq />}/>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='classes' element={<CareersLayout />}>
          <Route index element={<Careers />} loader={careerLoader}></Route>
          <Route path=':id'></Route>
        </Route>

        <Route path='*' element={<Error />}/>
    </Route>
  )
)

function App() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  );
}

export default App;
