import React, {useState, useEffect} from 'react';
import Active from "./Active";
import { FALSE } from 'node-sass';


const Opciones = (props) => {

  const [ opcion, guardaropcion ] = useState([]);
  const [ Selec, guardarSelec ] = useState({});

  const {opciones, guardaropciones, guardarSelecion} = props


    useEffect(() => {
        if(props == null){
            return
        }
        guardaropcion(opciones)
        guardarSelecion(Selec)
        render()

        // eslint-disable-next-line
    }, [props])

    const limpiar = (opc, val) => {        
        opcion[opc].valores.map( v => (v.sel = false))        
        opcion[opc].valores[val].sel = true

        const sel = Selec;
        sel[opcion[opc].nombre] = opcion[opc].valores[val]

        guardarSelec(sel)
        guardarSelecion(Selec)
    }

    const onClickSel = (opc, valor) => {
        limpiar(opc, valor)
        console.log(Selec)
        guardaropcion(opcion)
        guardaropciones(opcion)
        render()
      }



    let render = () => {
          if( opcion !== null){
              
              return ( 
                  opcion !== null?
                  opcion.map((opcio , index) => {
                      return(
                          <div key={opcio.nombre}>
                        <h4 className="sub-titulo">{opcio.nombre}</h4>
                            <li key={opcio.nombre}>
                            {opcio.valores.map((valor, ind) => {
                                return(
                                    
                                        <Active
                                        onClickSel={onClickSel}
                                        valor={valor}
                                        index={index}
                                        ind={ind}
                                        active={true}
                                        ></Active>
                                        
                                    
                            )})
                            }

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