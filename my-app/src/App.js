import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import Menu from './components/menu';
import Banner from './components/banner';
import ContentCars from './components/contentCards';
const user = [
  {
    username:"Paola",
    stars:5,
    commet:"Excelente servicio, lo recomiendo."
  },{
    username:"Pablo",
    stars:5,
    commet:"Excelente servicio, lo recomiendo."
  },{
    username:"Juan",
    stars:5,
    commet:"Excelente servicio, lo recomiendo."
  },{
    username:"Susan",
    stars:5,
    commet:"Excelente servicio, lo recomiendo."
  },{
    username:"Miguel",
    stars:5,
    commet:"Excelente servicio, lo recomiendo."
  },{
    username:"Raul",
    stars:5,
    commet:"Excelente servicio, lo recomiendo."
  },{
    username:"Teo",
    stars:5,
    commet:"Excelente servicio, lo recomiendo."
  },
];

function App() {
  return (
    <div className="App">
        <Menu/>
        <Banner/>
        <div className="container-fluid mt-4 mb-4">
        <ContentCars comentaty={user}/> 

           
        </div>
        
    </div>
  );
}

export default App;
