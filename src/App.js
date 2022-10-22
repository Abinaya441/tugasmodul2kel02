import logo from './logo.svg';
import './App.css';
import data from './data.json';
console.log(data);

function DataFromJson(force) {
  var event = $("#Search").val(); //fetching the value from the textbox  
  // var url = "./data.json"; //path where Json file is saved in my project  
  $.getJSON(data, function (response) {
    //console.log(response);  
    if (response.length) {
      $("#nim").empty();        //tableUser is the id of the table  
      var content = "<tr><th>Name</th><th>Address</th><th>Phone Number</th></tr>";
      for (var i = 0; i < response.length; i++) {
        if ((response[i].Name).indexOf(event) != -1 || (response[i].Address).indexOf(event) != -1 || (response[i].Phone_Number).indexOf(event) != -1) //Name , Address and Phone_number are my attributes in User Table {  
          content += "<tr id='TableData'><td>" + response[i].Name + "</td><td>" + response[i].Address + "</td><td>" + response[i].Phone_Number + "</td></tr>";
      }
    }
    $("#tableUser").append(content); //appending the list to the table  
  }  
        });          
}


function App() {
  // const [data, setData] = useState([]);
  // const getData = () => {
  //   fetch('data.json'
  //     , {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //       }
  //     }
  //   )
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (myJson) {
  //       console.log(myJson);
  //       setData(myJson)
  //     });
  // }
  // useEffect(() => {
  //   getData()
  // }, [])
  return (
    // <body>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tugas Modul 2 Praktikum RPLBK Kelompok 02</h1>
        <p>Defin Friko Fahdani 21120119130054</p>
        <p>Muhammad Abinaya Isaqofi 21120119130039</p>
        <p>Ega Oktabrianto 21120119130066</p>
        <p>Nurhaidah 21120119120003</p>
        <input type="text" id="Search" placeholder="NIM" />


        {/* <input type="text" id="inputval"> */}
        {/* <div id="data">
              <p id="pesan"></p>
              <h1 id="judul"></h1>
              <span id="namaLengkap"></span>
              <span id="namaPanggilan"></span>
              <span id="noTel"></span>
              <span id="lineId"></span>
              <span id="tanggalLahir"></span>
              <span id="nim"></span>
              <span id="eMail"></span>
              <span id="hobi"></span>
            </div> */}
        {/* </input> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>

    // </body>
  );
}

export default App;
