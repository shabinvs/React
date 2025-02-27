import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css';
import reportWebVitals from './reportWebVitals';
import Design from './thailwind/Design';
import Main from './conditionalrendering/Main';
import Movie from './movie/Movie';
import Detail from './movie/Detail';
import Wed from './practice/Wed';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/design' element={<Design></Design>}></Route>
        <Route path='/condition' element={<Main></Main>}></Route>
        <Route path='/movie' element={<Movie></Movie>}></Route>
        <Route path='/movies/:id' element={<Detail></Detail>}></Route>
        <Route path='/wed' element={<Wed></Wed>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
