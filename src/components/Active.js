import React, {useState, useEffect}  from 'react';


const Active = ({onClickSel, valor, index, ind, active, key}) => {

        
    const [ Active, guardarActive ] = useState(false);

    useEffect(() => {
        if(active){
            guardarActive(active)
        }
        console.log(valor.key)

        // eslint-disable-next-line
    }, [active])

    const onClick01 = () => {
        console.log("working")
        guardarActive(!Active)
        onClickSel(index, ind)
      }


    if(Active){

        return (
        <div key={valor.key} onClick={()=> onClick01()} className="opcion active">

                    <p>{valor.valor}</p>
                    <p>{active && "active"}</p>
                    <button >seleccionar</button>
                    <img src={valor.img} alt={valor.valor}></img>
        </div>
        )
    }else{

        return (
            <div key={valor.key} onClick={()=> onClick01()} className="opcion">
                    <p>{valor.valor}</p>
                    
                    <img src={valor.img} alt={valor.valor}></img>
        </div>
        )
    }
                    
                        
                    
}


export default Active;