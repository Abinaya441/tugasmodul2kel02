import logo from './logo.svg';
import './App.css';
import data from './data.json';
import React, { useState, useEffect } from "react";
import ReactJSX from './ReactJSX';

function App() {
  const [kuery, setSearchTerm] = useState("");

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <ReactJSX />

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
            } else if (post.nim.toString() === kuery.toString()) {
              return post;
            }
          }).map((post) => (
            <div className="box" key={post.nim}>
              
              <table border={0}>
                <div className="img-profile">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6FoyrD5xNNMboCYW6q0zwT-KjEvkBnta5Zfh2Dqata3a_1ZpK62EVFsnj_1cyca5aprI&usqp=CAU"></img>
                 </div>
                <tr><td>Nama Lengkap</td> <td> - </td> <td>{post.nama_lengkap}</td> </tr>
                <tr><td>Nama Panggilan</td> <td> - </td> <td>{post.nama_panggilan}</td> </tr>
                <tr><td>No Telp.</td> <td> - </td> <td>{post.nomor_telepon}</td> </tr>
                <tr><td>ID LINE</td> <td> - </td> <td>{post.id_line}</td> </tr>
                <tr><td>Tanggal Lahir</td> <td> - </td> <td>{post.tanggal_lahir}</td> </tr>
                <tr><td>NIM</td> <td> - </td> <td>{post.nim}</td> </tr>
                <tr><td>Email</td> <td> - </td> <td>{post.email}</td> </tr>
                <tr><td>Hobi</td> <td> - </td> <td>{post.hobi}</td> </tr>
                </table>
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
