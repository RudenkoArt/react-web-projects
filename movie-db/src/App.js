import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Movie from './SingleMovie';

// http://www.omdbapi.com/?i=tt3896198&apikey=27a2ab5a

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/movies/:id' element={<Movie />} />
    </Routes>
  );
};

export default App;
