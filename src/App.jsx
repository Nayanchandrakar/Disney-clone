import "./App.css";
import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Header from "./components/Header";
import Details from "./components/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGlobalContext } from "./Context";
import Watchlist from "./components/Watchlist";
import Series from './components/Series'
import Original from "./components/Original";
import MovieSlice from "./movie/MovieSlice";
const App = () => {
  const { myuser } = useGlobalContext();

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {myuser == null ? (
            <Route path="/" element={<Login/>} />
          ) : (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="/movies" element={<MovieSlice />} />
              <Route path="/series" element={<Series />} />
              <Route path="/original" element={<Original />} />
            </>
          )}

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
