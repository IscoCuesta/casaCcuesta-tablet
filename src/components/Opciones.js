import React, {useState, useEffect, Fragment} from 'react';
import Active from "./Active";
import Resumen from "./Resumen";


const Opciones = (props) => {

  const [ opcion, guardaropcion ] = useState([]);
  const [ Selec, guardarSelec ] = useState({});

  const {opciones, guardaropciones, guardarSelecion, Selecion} = props


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

    }

    const onClickSel = (opc, valor) => {
        opcion[opc].valores.map( v => (v.sel = false))        
        opcion[opc].valores[valor].sel = true

        
        guardaropcion(opcion)
        guardaropciones(opcion)

        const sel = Selec;
        sel[opcion[opc].nombre] = opcion[opc].valores[valor]

        guardarSelec(sel)
        guardarSelecion(Selec)
        render()
      }



    let render = () => {
          if( opcion !== null){
              
              return ( 
                  opcion !== null?
                  <Fragment>

                  <Resumen
                  Selec={Selec}
                  opcion={opcion}
                  >     
                  </Resumen>

                  {opcion.map((opcio , index) => {
                      return(
                          <div key={opcio.nombre}>
                            <h4 className="sub-titulo">{opcio.nombre}</h4>
                            <li>
                            {opcio.valores.map((valor, ind) => {
                                return(
                                    <Active
                                    onClickSel={onClickSel}
                                    valor={valor}
                                    index={index}
                                    ind={ind}
                                    active={valor.sel}
                                    Selec={Selec}
                                    opcio={opcio.nombre}
                                    ></Active>
                                    
                                    
                                    )})
                                }

                            </li>                               
                        </div>
                        )})}
                        </Fragment>

                        : null 
                        
                        );
                        
                    } else {return null}
                }
                return render()

    }


export default Opciones;