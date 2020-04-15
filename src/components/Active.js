import React, {useState, useEffect}  from 'react';


const Active = ({onClickSel, valor, index, ind, active, Selec, opcio}) => {

        
    const [ Active, guardarActive ] = useState(false);

    useEffect(() => {
        if(active !== null && Selec[opcio] !== undefined && Selec !== {}){
            checkActive()
            render()
            console.log(Selec[opcio].sel)
        }

        // eslint-disable-next-line
    }, [Active])
    useEffect(() => {
        guardarActive(valor.sel)

        // eslint-disable-next-line
    }, [Selec])

    const onClick01 = () => {
        if(Active === false){
            guardarActive(true)
            onClickSel(index, ind)            
            console.log(Selec)
        }
        onClickSel(index, ind)
        checkActive()
      }

    const checkActive = ()=> {
        
        console.log(Active && Selec[opcio].sel)
        if(Selec[opcio].sel){
            guardarActive(true)
        }else{
            guardarActive(false)
        }
    }


    let render = () => {
        
        
        if(Active){
            
            return (
                <div key={valor.key} onClick={()=> onClick01()} className="opcion active">
                    <p>{valor.valor}</p>
                    <img src={valor.img} alt={valor.valor}></img>
                </div>
        )
        }if(!Active){        
            return (
                <div key={valor.key} onClick={()=> onClick01()} className="opcion">
                        <p>{valor.valor}</p>                        
                        <img src={valor.img} alt={valor.valor}></img>
                </div>
            )
        }else{return null}
}
return render()
                    
                        
                    
}


export default Active;