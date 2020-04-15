import React, { useState, useEffect } from 'react';

// import { Parallax } from "react-parallax";
import Card from "./components/Card";
import Seleccion from "./components/Seleccion";

function App() {

  
  //mio
  const [ showSelleccion, guardarshowSelleccion ] = useState(true);
  const [ seleccionPrimaria, guardarseleccionPrimaria ] = useState(null);
  const [ opciones, guardarOpciones ] = useState(null);

  let contenido = {
    camisa: {
      titulo: "Camisa",
      opciones: [
        {
          nombre: "cuellos",
          valores: [
            {
              valor: "Italiano",
              sel: false,
              key: "01",
              img: "./camisa/camisaCuelloItaliano.jpg"
            },
            {
              valor: "Clasico",
              sel: false,
              key: "02",
              img: "./camisa/camisaCuelloClasico.jpg"
            },
            {
              valor: "Sport",
              sel: false,
              key: "03",
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
              key: "04",
              img: "./camisa/camisapunosItaliano.jpg"
            },
            {
              valor: "mancuernillas",
              sel: false,
              key: "05",
              img: "./camisa/camisapunosClasico.jpg"
            },
            {
              valor: "mancuernillas redondo",
              sel: false,
              key: "06",
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
              key: "07",
              img: "./camisa/camisaCuelloItaliano.jpg"
            },
            {
              valor: "Clasico",
              sel: false,
              key: "08",
              img: "./camisa/camisaCuelloClasico.jpg"
            },
            {
              valor: "Sport",
              sel: false,
              key: "09",
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
              key: "10",
              img: "./camisa/camisapunosItaliano.jpg"
            },
            {
              valor: "mancuernillas",
              sel: false,
              key: "11",
              img: "./camisa/camisapunosClasico.jpg"
            },
            {
              valor: "mancuernillas redondo",
              sel: false,
              key: "12",
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
              key: "13",
              img: "./camisa/camisaCuelloItaliano.jpg"
            },
            {
              valor: "Clasico",
              sel: false,
              key: "14",
              img: "./camisa/camisaCuelloClasico.jpg"
            },
            {
              valor: "Sport",
              sel: false,
              key: "15",
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
              key: "16",
              img: "./camisa/camisapunosItaliano.jpg"
            },
            {
              valor: "mancuernillas",
              sel: false,
              key: "17",
              img: "./camisa/camisapunosClasico.jpg"
            },
            {
              valor: "mancuernillas redondo",
              sel: false,
              key: "18",
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
          {/* <Parallax className="rn-paralax-portfolio"  strength={500} > */}
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
                {/* </Parallax> */}
          <div className="">
            <Card 
              info={opciones} 
            /> 
          </div>
    </div>
  );
}

export default App;
