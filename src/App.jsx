import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import { HomePage } from './pages/Home.page';
import Movie from './pages/Movie.page';
import MovieLayout from './layouts/Movie.layout';
import DefaultLayout from './layouts/Default.layout';
import Plays from './pages/Plays.page';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<DefaultLayout />} /> */}
        <Route path="/" element={
          <React.Fragment>
            <DefaultLayout />
            <HomePage />
          </React.Fragment>
        } />
        <Route path="/movie/:id" element={
          <React.Fragment>
            <MovieLayout />
            <Movie />
          </React.Fragment>
        } />
        <Route path="/plays" exact element={
          <React.Fragment>
            <DefaultLayout />
            <Plays />
          </React.Fragment>
        } />

      </Routes>
      {/* <MovieHOC path="/movie/:id" exact component={Movie} /> */}
    </>
  );
}

export default App;
