
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Paginas/Home';
import Pokemon from './Paginas/Pokemon';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<Router>
  <Routes>
    <Route path="/" exact element={<Home/>}/>
    <Route path="/Pokemon" element={<Pokemon/>}/>
  </Routes>
</Router>
</>
);