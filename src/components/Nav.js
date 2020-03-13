import React, {Fragment} from 'react';
import PropTypes from "prop-types";

import "../styles/Nav.css"

const Nav = ({showNavbar, guardarshowNavbar}) => {


    const goTo = (docId) => {
        const divToScroll = document.querySelector(docId);
        divToScroll.scrollIntoView({ behavior: 'smooth' })
    }
    
    const goToResp = (docId) => {
        guardarshowNavbar(false)
        const divToScroll = document.querySelector(docId);
        divToScroll.scrollIntoView({ behavior: 'smooth' })
    }
    
    return ( 
        <Fragment>
            {showNavbar?
            null
            :
            <a href="#!" className="icon" onClick={() => guardarshowNavbar(!showNavbar)}>
                <i className="material-icons">menu</i>
            </a>}
            <div className="nav" id="mynav">
                    <div className="options">
                        <a href="#!" className="nav-option" onClick={() => goTo("#first")}>INICIO </a>
                        <a href="#!" className="nav-option" onClick={() => goTo("#second")}>LO QUE HACEMOS</a>
                        <a href="#!" className="nav-option" onClick={() => goTo("#third")}>ARRENDAMIENTO</a>
                        <a href="#!" className="nav-option" onClick={() => goTo("#fourth")}>CRÉDITO SOBRE NÓMINA</a>
                        <a href="#!" className="nav-option" onClick={() => goTo("#fifth")}>COTIZA CON NOSOTROS</a>
                        <a href="#!" className="nav-option" onClick={() => goTo("#sixth")}>CONTACTO</a>
                    </div>
            </div>
            {
                showNavbar?
                <Fragment>
                    <a href="#!" className="icon close" onClick={() => guardarshowNavbar(!showNavbar)}>
                        <i className="material-icons">close</i>
                    </a>
                    <div className="responsive" id="mynav">
                        <div className="options">
                        <a href="#!" className="nav-option" onClick={() => goToResp("#first")}>INICIO </a>
                        <a href="#!" className="nav-option" onClick={() => goToResp("#second")}>LO QUE HACEMOS</a>
                        <a href="#!" className="nav-option" onClick={() => goToResp("#third")}>ARRENDAMIENTO</a>
                        <a href="#!" className="nav-option" onClick={() => goToResp("#fourth")}>CRÉDITO SOBRE NÓMINA</a>
                        <a href="#!" className="nav-option" onClick={() => goToResp("#fifth")}>COTIZA CON NOSOTROS</a>
                        <a href="#!" className="nav-option" onClick={() => goToResp("#sixth")}>CONTACTO</a>
                        </div>
                    </div>
                </Fragment>

                :null
            }
        </Fragment>
    );
}

Nav.propTypes = {
    showNavbar: PropTypes.bool.isRequired,
    guardarshowNavbar: PropTypes.func.isRequired
  };

export default Nav;