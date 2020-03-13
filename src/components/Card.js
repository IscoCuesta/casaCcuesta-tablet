import React from 'react';
import PropTypes from "prop-types";
import "../styles/Card.css"


const Card = ({info}) => {

    const {titulo, opciones } = info
    return ( 
        <div className={"card "} id={titulo}>
                <div className="wraper">
                    <h2 className="title"> {titulo} </h2>
                     <div className="card-content " >
                         <ul>

                         {   opciones.map(opcion => {
                             return(
                                 <li key={opcion.nombre}>
                                    <h4 className="sub-titulo">{opcion.nombre}</h4>
                                    {opcion.valores.map(valor => (
                                        <div key={valor.valor}>
                                            <p>{valor.valor}</p>
                                            <img src={valor.img}></img>
                                        </div>
                                    ))
                                    }
                                 </li>                               
                                 )})
                                }
                        </ul>
                    </div>                
                </div>
            </div>
    );
}

Card.propTypes = {
    info: PropTypes.object.isRequired
  };

export default Card;