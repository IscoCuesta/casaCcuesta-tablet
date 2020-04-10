import React, {useState, useEffect} from 'react';
import Opcion from "./Opcion";


const Opciones = (props) => {

  const [ opcion, guardaropcion ] = useState([]);
  const [ Selec, guardarSelec ] = useState({});


    useEffect(() => {
        if(props == null){
            return
        }
        guardaropcion(props.opciones)
        render()
        // eslint-disable-next-line
    }, [props, opcion])

    const limpiar = (opc, val) => {
        
        opcion[opc].valores.map( v => (v.sel =false))        
        opcion[opc].valores[val].sel = true
        const sel = Selec;
        sel[opcion[opc].nombre] = opcion[opc].valores[val]
        guardarSelec(sel)
    }

    const onClickSel = (opc, valor) => {
        limpiar(opc, valor)
        console.log(Selec)
        guardaropcion(opcion)
        props.guardarSelecion(Selec)
        render()
      }

    let render = () => {
          if( opcion !== null){
              
              return ( 
                  opcion !== null?
                  opcion.map((opcio , index) => {
                      return(
                          <div key={opcio.nombre}>
                        <h4 className="sub-titulo">{opcio.nombre} {Selec[opcio.nombre] ? " : "+Selec[opcio.nombre].valor : " " }</h4>
                            <li key={opcio.nombre}>
                                <Opcion
                                    opcio={opcio}
                                    index={index}
                                    Selec={Selec}
                                    onClickSel={onClickSel}
                                ></Opcion>

                            </li>                               
                        </div>
                        )})
                        : null 
                        );
                        
                    } else {return null}
        }

        return render()
    }


export default Opciones;