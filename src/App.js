import React, { useState, useEffect } from 'react';

import { Parallax } from "react-parallax";
import Card from "./components/Card";
import Seleccion from "./components/Seleccion";

function App() {

  
  //mio
  const [ showSelleccion, guardarshowSelleccion ] = useState(true);
  const [ seleccionPrimaria, guardarseleccionPrimaria ] = useState(null);
  const [ opciones, guardarOpciones ] = useState(null);

  const contenido = {
    camisa: {
      titulo: "Camisa",
      opciones: [
        {
          nombre: "cuellos",
          valores: [
            {
              valor: "Italiano",
              sel: false,
              img: "./camisa/camisaCuelloItaliano.jpg"
            },
            {
              valor: "Clasico",
              sel: false,
              img: "./camisa/camisaCuelloClasico.jpg"
            },
            {
              valor: "Sport",
              sel: false,
              img: "./camisa/camisaCuelloSport.jpg"
            }
          ]
        },
        {
          nombre: "punos",
          valores: [
            {
              valor: "redondo",
              sel: false,
              img: "./camisa/camisapunosItaliano.jpg"
            },
            {
              valor: "mancuernillas",
              sel: false,
              img: "./camisa/camisapunosClasico.jpg"
            },
            {
              valor: "mancuernillas redondo",
              sel: false,
              img: "./camisa/camisapunosSport.jpg"
            }
          ]
        }

      ]
    },
    traje:{
      titulo: "Traje",
      opciones: [
        {
          nombre: "cuellos",
          valores: [
            {
              valor: "Italiano",
              sel: false,
              img: "./camisa/camisaCuelloItaliano.jpg"
            },
            {
              valor: "Clasico",
              sel: false,
              img: "./camisa/camisaCuelloClasico.jpg"
            },
            {
              valor: "Sport",
              sel: false,
              img: "./camisa/camisaCuelloSport.jpg"
            }
          ]
        },
        {
          nombre: "punos",
          valores: [
            {
              valor: "redondo",
              sel: false,
              img: "./camisa/camisapunosItaliano.jpg"
            },
            {
              valor: "mancuernillas",
              sel: false,
              img: "./camisa/camisapunosClasico.jpg"
            },
            {
              valor: "mancuernillas redondo",
              sel: false,
              img: "./camisa/camisapunosSport.jpg"
            }
          ]
        }

      ]
    },
    blazer:{
      titulo: "Blazer",
      opciones: [
        {
          nombre: "cuellos",
          valores: [
            {
              valor: "Italiano",
              sel: false,
              img: "./camisa/camisaCuelloItaliano.jpg"
            },
            {
              valor: "Clasico",
              sel: false,
              img: "./camisa/camisaCuelloClasico.jpg"
            },
            {
              valor: "Sport",
              sel: false,
              img: "./camisa/camisaCuelloSport.jpg"
            }
          ]
        },
        {
          nombre: "punos",
          valores: [
            {
              valor: "redondo",
              sel: false,
              img: "./camisa/camisapunosItaliano.jpg"
            },
            {
              valor: "mancuernillas",
              sel: false,
              img: "./camisa/camisapunosClasico.jpg"
            },
            {
              valor: "mancuernillas redondo",
              sel: false,
              img: "./camisa/camisapunosSport.jpg"
            }
          ]
        }

      ]
    }
  }

  useEffect(() => {

    if(seleccionPrimaria !== null){
      guardarOpciones(contenido[seleccionPrimaria])
    }
    
    // eslint-disable-next-line
}, [seleccionPrimaria, showSelleccion])


  return (
    <div>
          <Parallax className="rn-paralax-portfolio"  strength={500} >
                    <div className="portfolio-area ptb--120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title service-style--2 text-center mb--30 mb_sm--0">
                                        <h2>Bespoke</h2>
                                        <p>by Casa Cuesta</p>
                                    </div>
                                </div>
                            </div>
                            {
                              showSelleccion?
                              <Seleccion 
                                guardarseleccionPrimaria={guardarseleccionPrimaria}
                                guardarshowSelleccion={guardarshowSelleccion}
                              />
                              : 
                              <div className="portfolio-button" onClick={() => guardarshowSelleccion(false)}>
                                 <a className="rn-btn" href="/">Cancelar</a>
                              </div>

                            }
                        </div>
                    </div>
                </Parallax>
          <div className="">
            <Card 
              info={opciones} 
            /> 
          </div>
    </div>
  );
}

export default App;
