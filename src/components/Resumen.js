import React, {useState, useEffect, Fragment} from 'react';




const Resumen = (Props) => {

    const {Selecion, opcion} = Props

  const [ Sel, guardarSel ] = useState(Selecion);
  const [ opciones, guardarOpciones ] = useState({});
  const [ rend, guardarRend ] = useState([]);


    useEffect(() => {
            guardarSel(Selecion)
            guardarOpciones(opcion)
            console.log("useeffect en Props", Sel, opcion)
            actualizar()

        // eslint-disable-next-line
    }, [Props])

    
    let actualizar = () => {
        if(Sel){

            let k = Object.keys(Sel)
     
            console.log(k)
        }
        
        
        // .forEach(ele => {
        //     console.log("actualizar",ele)
        //     let Arr = Sel[ele];
        //     Arr.titulo = ele;

        //     let re = rend
        //     re.push(Arr)
        //     guardarRend(re)
        //     console.log(rend)
        // })
    }



        
        return ( 
            <Fragment>
            <h2 className="sub-title"> Resumen de Selección </h2>
                <div className="card-content " >
                    <h1>funciona esta madre</h1>

                
            </div>
            </Fragment>
        );
}


export default Resumen;