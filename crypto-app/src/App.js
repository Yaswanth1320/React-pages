import './App.css';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import SharedLayout from './Layouts/SharedLayout';
import Home from './components/Home';
import Error from './components/Error';
import Currencies from './components/Currencies'
import Exchanges from './components/Exchanges'
import News from './components/News';
import Details from './components/Details';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home/>} />
        <Route path='/cryptocurrencies' element={<Currencies/>}/>
        <Route path='/:uuid' element={<Details/>}/>
        <Route path='/exchange' element={<Exchanges/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='*' element={<Error/>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
