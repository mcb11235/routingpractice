import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter, useParams, Routes, Route} from "react-router-dom";

const ParamsComp = (props) => {
  const {word, color, background} = useParams();
  return(
    <div>
      {
        isNaN(word) ? 
        <p style={color?{color: color, backgroundColor: background}:null}>This is a word: {word}</p> : <p>This is a number: {word}</p>
      }
    </div>
  )
}

const Home = (props) => {

  return (
      <div>
          Welcome!
      </div>
  )
}

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/home"/>
        <Route element={<ParamsComp />} path="/:word"/>
        <Route element={<ParamsComp />} path="/:word/:color/:background"/>
      </Routes>            
    </div>
    </BrowserRouter>
  );
}

export default App;