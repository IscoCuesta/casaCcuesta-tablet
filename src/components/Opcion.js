import React, {useState, useEffect} from 'react';


const Opcion = (props) => {

  const [ opcion, guardaropcion ] = useState([]);
  const [ Seleccion, guardarSeleccion ] = useState([]);


    useEffect(() => {
        if(props == null){
            return
        }
        guardaropcion(props.opciones)
        // eslint-disable-next-line
    }, [props])

    const onClickSel = (opc, valor) => {
        console.log(opc, valor)
        opcion[opc].valores[valor].sel = true
        console.log(opcion[opc].valores[valor])
        props.guardaropciones(opcion)


      }

      if( opcion !== null){

          return ( 
              opcion !== null?
              opcion.map((opcion , index) => {
                  return(
                      <div key={opcion.nombre}>
                        <h4 className="sub-titulo">{opcion.nombre}</h4>
                            <li key={opcion.nombre}>
                                <select value={opcion.nombre}>
                                    {opcion.valores.map((valor, ind) => (
                                            <option value={valor}>
                                                <div key={valor.valor} onClick={()=> onClickSel(index, ind)} className="opcion">
                                                    <p>{valor.valor}</p>
                                                    <img src={valor.img} alt={valor.valor}></img>
                                                </div>
                                            </option>
                                        ))
                                    }
                                </select>
                            </li>                               
                        </div>
                        )})
                        : null 
                        );
                        
        }
}


export default Opcion;