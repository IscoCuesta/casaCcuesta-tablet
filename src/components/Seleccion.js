import React from 'react';


const Seleccion = (props) => {

    
    let {guardarseleccionPrimaria, guardarshowSelleccion } = props
    const PortfolioList = [
        {
            image: 'image-1',
            category: 'traje',
            title: 'Traje a la medida'
        },
        {
            image: 'image-2',
            category: 'camisa',
            title: 'Camisa a la medida'
        },
        {
            image: 'image-3',
            category: 'blazer',
            title: 'Balzer a la medida'
        }
    ]

    
const onClickSeleccion = (seleccion) => {
    guardarseleccionPrimaria(seleccion)
    guardarshowSelleccion(false)
  }
    return ( 

        <div className="row">
        {/* Start Single Portfolio  */}
        {PortfolioList.map((value , index) => (
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--40" key={index}>
                <div className="portfolio" >
                    <div className="thumbnail-inner">
                        <div className={`thumbnail image-1`}></div>
                        <div className={`bg-blr-image image-1`}></div>
                    </div>
                    <div className="content">
                        <div className="inner">
                            <h4><a href="/portfolio-details">{value.title}</a></h4>
                            <div className="portfolio-button" onClick={() => onClickSeleccion(value.category)}>
                                <a className="rn-btn" href="/#">Comenzar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        {/* End Single Portfolio  */}
        </div>
    );
}


export default Seleccion;