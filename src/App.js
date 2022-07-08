import style from './style/App.module.css';
import React,{useEffect, useState} from "react"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import MoviesGrid from "./components/MoviesGrid"
import MovieDetails from "./pages/MoviesDetails"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={style.title}>MOVIES</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails/>}/>
          <Route path="/" element={<Home/>} />
        </Routes>
      </main>
    </Router>
  );  
}

export default App;
