import React  from 'react';


const Active = ({onClickSel, valor, index, ind, active}) => {

    if(active){

        return (
        <div key={valor.ind} onClick={()=> onClickSel(index, ind)} className="opcion active">
                    <p>{valor.valor}</p>
                    <img src={valor.img} alt={valor.valor}></img>
        </div>
        )
    }else{

        return (
            <div key={valor.ind} onClick={()=> onClickSel(index, ind)} className="opcion">
                    <p>{valor.valor}</p>
                    <img src={valor.img} alt={valor.valor}></img>
        </div>
        )
    }
                    
                        
                    
}


export default Active;