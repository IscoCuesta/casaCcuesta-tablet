import React, {useState, useEffect} from 'react';


const Opciones = (props) => {

  const [ opcion, guardaropcion ] = useState([]);

  const {opcio, onClickSel , index, Selec} = props


    useEffect(() => {
        if(props == null){
            return
        }
        render()
        // eslint-disable-next-line
    }, [props, opcion])



    let render = () => {
          if( opcion !== []){          
              return ( 
                    opcio.valores.map((valor, ind) => (
                        <div key={valor.valor} onClick={()=> onClickSel(index, ind)} className={Selec[opcio.nombre] ? opcio[opcio.nombre].sel? "opcion active": "opcion": "opcion"}>
                                    <p>{valor.valor}</p>
                                    <img src={valor.img} alt={valor.valor}></img>
                        </div>
                        )))
            } else {return null}

        }

    return render()
}


export default Opciones;