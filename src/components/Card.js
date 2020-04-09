import React, {useState, useEffect} from 'react';


import Opcion from "./Opcion";
import "../styles/Card.css"


const Card = ({info}) => {

    
  const [ titulo, guardartitulo ] = useState(null);
  const [ opciones, guardaropciones ] = useState(null);
  const [ click, guardarclick ] = useState({});


    useEffect(() => {
        if(info == null){
            return
        }
        guardartitulo(info.titulo)
        guardaropciones(info.opciones)
        // eslint-disable-next-line
    }, [info, opciones])




    if(info == null){
        return null
    } else {

        return ( 
            <div className={"card "}>
                <div className="wraper">
                    <h2 className="title"> {titulo} </h2>
                     <div className="card-content " >
                         <ul>

                         { opciones !== null?
                            <Opcion
                                opciones={opciones}
                                guardaropciones={guardaropciones}
                            ></Opcion>
                               : null }
                        </ul>
                    </div>                
                </div>
            </div>
        );
    }
}


export default Card;