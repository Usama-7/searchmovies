import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SingleMovie from './components/SingleMovie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './components/List';


function App() {
  return (
   <>
   
   <BrowserRouter>
          <Navbar />
            <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/movieslist' element={<List />} />
                  <Route path='/movie/:id' element={<SingleMovie/>} />        
            </Routes>      
      </BrowserRouter>
   
   </>
  );
}

export default App;
