import logo from './logo.svg';
import './App.css';
import data from './data.json';
import React, { useState, useEffect } from "react";

function App() {
  const [kuery, setSearchTerm] = useState("");

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tugas Modul 2 Praktikum RPLBK Kelompok 02</h1>
        <p>Defin Friko Fahdani 21120119130054</p>
        <p>Muhammad Abinaya Isaqofi 21120119130039</p>
        <p>Ega Oktabrianto 21120119130066</p>
        <p>Nurhaidah 21120119120003</p>
        <input
          type="text"
          value={kuery}
          onChange={event => setSearchTerm(event.target.value)}
          placeholder="nim mahasiswa"
        />
        {
          data.filter(post => {
            if (kuery === '') {
              return post;
            } else if (post.nim.toString().includes(kuery.toString())) {
              return post;
            }
          }).map((post) => (
            <div className="box" key={post.nim}>
              <p>{post.nama_lengkap}</p>
              <p>{post.nama_panggilan}</p>
            </div>
          ))
        }
        {/* {
          data.filter(post => {
            if (kuery === '') {
              return post;
            } else if (post.nama_lengkap.toLowerCase().includes(kuery.toLowerCase())) {
              return post;
            }
          }).map((post) => (
            <div className="box" key={post.nim}>
              <p>{post.nama_lengkap}</p>
              <p>{post.nama_panggilan}</p>
            </div>
          ))
        } */}
      {/* </header> */}
    </div>
  );
}

export default App;