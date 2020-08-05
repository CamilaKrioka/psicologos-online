import React, {useState} from 'react';
import logo from '../images/logo.png';
import './NavLateral.css';
import {Link} from 'react-router-dom';
import RegistroModal from '../componetes/RegistroModal';

export default (props) =>{

    const [ showRegistroModal, setShowRegistroModal ] = useState(false);

    const handleShowRegistroModal = () =>{
        setShowRegistroModal(true);
    }

    const handleHideRegistroModal = () =>{
        setShowRegistroModal(false);
    }

    return(
        <>

            <nav class="navbar navbar-expand-lg navbar-light bg-transparent nav-rigth">

                <div class="collapse navbar-collapse nav" id="navbarTogglerDemo01">

                    <div class="barra-lateral">
                        <div>
                            <img id="imagenleon" src={logo} alt="León" />
                        </div>

                        <div class="btn-group" role="group" aria-label="Basic example">
                        <nav>
                            <ul class="lista">

                                <Link to="/">
                                    <li>Home</li>
                                </Link>

                                { props.user && props.user.type === 'paciente'
                                ?
                                  <>
                                    <Link to="/perfil">
                                        <li>Mi perfil</li>
                                    </Link>
                                
                                    <Link to="/consulta">
                                        <li>Agendar una consulta</li>
                                    </Link>
                                  </>
                                : 
                                  <>
                                    <li onClick={handleShowRegistroModal}>Comienza ahora</li>

                                    <a href="#nuestros-planes">
                                        <li>Nuestro planes</li>
                                    </a>
                                  </>
                                }

                                <a href="#nuestros-psicologos">
                                    <li>Nuestro psicólogos</li>
                                </a>
                                
                                <Link to="/contacto">
                                    <li>Contacto</li>
                                </Link>
                            </ul>
                        </nav>
                        </div>

                    </div>

                </div>
            </nav>

            <RegistroModal show={showRegistroModal} 
                           handleHide={handleHideRegistroModal}
            />
        </>
    )
}