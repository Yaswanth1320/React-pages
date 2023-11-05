import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,RouterProvider} 
   from 'react-router-dom'
import Navbar from './Layouts/SharedLayout';
import { Home } from './Pages/Home';
import { Mens } from './Pages/Mens';

  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar />}>
      <Route index element={<Home/>}/>
      <Route path='mens' element={<Mens />}></Route>
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
