import React, { useState } from 'react';
import Nav from "./components/Nav";
import Card from "./components/Card";

function App() {

  
  //mio
  const [ showNavbar, guardarshowNavbar ] = useState(false);

  const contenido = [
    {
      titulo: "Camisa",
      opciones: [
        {
          nombre: "cuellos",
          valores: [
            {
              valor: "Italiano",
              img: "./camisa/camisaCuelloItaliano.jpg"
            },
            {
              valor: "Clasico",
              img: "./camisa/camisaCuelloClasico.jpg"
            },
            {
              valor: "Sport",
              img: "./camisa/camisaCuelloSport.jpg"
            }
          ]
        },
        {
          nombre: "punos",
          valores: [
            {
              valor: "redondo",
              img: "./camisa/camisapunosItaliano.jpg"
            },
            {
              valor: "mancuernillas",
              img: "./camisa/camisapunosClasico.jpg"
            },
            {
              valor: "mancuernillas redondo",
              img: "./camisa/camisapunosSport.jpg"
            }
          ]
        }

      ]
    },
    {
      titulo: "Traje",
      opciones: [
        {
          nombre: "cuellos",
          valores: [
            {
              valor: "Italiano",
              img: "./camisa/camisaCuelloItaliano.jpg"
            },
            {
              valor: "Clasico",
              img: "./camisa/camisaCuelloClasico.jpg"
            },
            {
              valor: "Sport",
              img: "./camisa/camisaCuelloSport.jpg"
            }
          ]
        },
        {
          nombre: "punos",
          valores: [
            {
              valor: "redondo",
              img: "./camisa/camisapunosItaliano.jpg"
            },
            {
              valor: "mancuernillas",
              img: "./camisa/camisapunosClasico.jpg"
            },
            {
              valor: "mancuernillas redondo",
              img: "./camisa/camisapunosSport.jpg"
            }
          ]
        }

      ]
    },
    {
      titulo: "Blazer",
      opciones: [
        {
          nombre: "cuellos",
          valores: [
            {
              valor: "Italiano",
              img: "./camisa/camisaCuelloItaliano.jpg"
            },
            {
              valor: "Clasico",
              img: "./camisa/camisaCuelloClasico.jpg"
            },
            {
              valor: "Sport",
              img: "./camisa/camisaCuelloSport.jpg"
            }
          ]
        },
        {
          nombre: "punos",
          valores: [
            {
              valor: "redondo",
              img: "./camisa/camisapunosItaliano.jpg"
            },
            {
              valor: "mancuernillas",
              img: "./camisa/camisapunosClasico.jpg"
            },
            {
              valor: "mancuernillas redondo",
              img: "./camisa/camisapunosSport.jpg"
            }
          ]
        }

      ]
    },
  ]  

  return (
    <div className="container">
      <Nav 
        showNavbar={showNavbar}
        guardarshowNavbar={guardarshowNavbar}
      />
        <header>
          <div className="contenido">
            <div className="logo" id="first">
              <img className="bandelier-logo" src="https://i.imgur.com/g8oTbyh.jpg" alt="bandellier logo"></img>
            </div>
            <Card 
              info={contenido[0]} 
            />
            <Card 
              info={contenido[1]} 
            />
            <Card 
              info={contenido[2]} 
            />
            
          </div>
        </header>
    </div>
  );
}

export default App;
