import React, {useState, useEffect} from 'react';


const Opciones = (props) => {

  const [ opcion, guardaropcion ] = useState([]);

  const {opcio , index, Selec, guardarSelec, guardarSelecion, guardaropciones} = props


    useEffect(() => {
        if(props == null){
            return
        }
        guardaropcion(opcio)
        render()

        // eslint-disable-next-line
    }, [props, opcion])

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
          if( opcion !== []){          
              return ( 
                    opcio.valores.map((valor, ind) => {
                        if(valor.sel){
                            return (
                            <div key={valor.valor} onClick={()=> onClickSel(index, ind)} className={"opcion active"}>
                                        <p>{valor.valor}</p>
                                        <img src={valor.img} alt={valor.valor}></img>
                            </div>
                            )
                        }else {return(
                                <div key={valor.valor} onClick={()=> onClickSel(index, ind)} className={"opcion"}>
                                    <p>{valor.valor}</p>
                                    <img src={valor.img} alt={valor.valor}></img>
                                </div>
                                )
                            }
                    }
                        
                    ))} else {return null}
        }

    return render()
}


export default Opciones;