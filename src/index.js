import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // ✅ Import Routes
import './index.css';
import reportWebVitals from './reportWebVitals';
import Design from './components/Design';
import Movie from './components/movie/Movie';
import Detail from './components/movie/Detail';
import Weather from './components/Weather/Weather';
import { Calcu } from './components/calculator/Calcu';
import Todo from './components/Todo/Todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/design' element={<Design />} />
        <Route path='/movie' element={<Movie></Movie>}></Route>
        <Route path='/movies/:id' element={<Detail></Detail>}></Route>
        <Route path='/weather' element={<Weather></Weather>}></Route>
        <Route path='/calculator' element={<Calcu></Calcu>}></Route>
        <Route path='/todo' element={<Todo></Todo>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
