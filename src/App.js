import logo from './logo.svg';
import './App.css';

import HomePage from './pages/HomePage';
import ApplicationMenu from './components/applicationMenu';
import { endpoints } from './utils/endpoints';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Applicationpage from './pages/applicationpage';
import Resourcespage from './pages/resourcespage'


function App() {
  return(
    
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/applications/:aid' element={<Applicationpage />}/>
      <Route path='/resources/:rid' element={<Resourcespage />}/>
      <Route path='/' element={<HomePage />}/>
    </Routes>
    </BrowserRouter>
    </>
    )
}

export default App;