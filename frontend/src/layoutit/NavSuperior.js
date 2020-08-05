import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from "react-bootstrap/Button";
import DropdownButton from 'react-bootstrap/DropdownButton';
import LoginModal from '../componetes/LoginModal';
import RegistroModal from '../componetes/RegistroModal';
import LoginPsicologo from '../componetes/LoginPsicologo';
import RegistroPsicologo from '../componetes/RegistroPsicologo';

export default (props) =>{

    const [showLoginModal, setShowLoginModal] = useState(false);

    const [ showRegistroModal, setShowRegistroModal ] = useState(false);

    const [ showPsicologoModal, setShowPsicologoModal ] = useState(false);

    const [ showRegistroPsicologoModal, setShowRegistroPsicologoModal ] = useState(false);

    const handleShowLoginModal = () =>{
        setShowLoginModal(true);
    }

    const handleHideLoginModal = () =>{
        setShowLoginModal(false);
    }

    const handleShowRegistroModal = () =>{
        setShowRegistroModal(true);
    }

    const handleHideRegistroModal = () =>{
        setShowRegistroModal(false);
    }

    const handleShowPsicologoModal = () =>{
        setShowPsicologoModal(true);
    }

    const handleHidePsicologoModal = () =>{
        setShowPsicologoModal(false);
    }

    const handleShowRegistroPsicologoModal = () =>{
        setShowRegistroPsicologoModal(true);
    }

    const handleHidePsicologoRegistroModal = () =>{
        setShowRegistroPsicologoModal(false);
    }

    return (
    <>

        <Navbar bg="transparent" expand="lg">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ml-auto">

                { !props.user
                  ?
                    <>
                    <Button variant="link" onClick={handleShowPsicologoModal}>Iniciar sesión como psicólogo</Button>
                    <Button  variant="info" className="mr-1" onClick={handleShowRegistroModal}>Registrarse</Button>
                    <Button variant="outline-info" onClick={handleShowLoginModal}>Iniciar sesión</Button>
                    </>
                  :
                    <>
                    <DropdownButton title={props.user.nombre} alignRight id="dropdown-basic-button" variant="info">
                        <NavDropdown.Item href="#action/3.1">Mi cuenta</NavDropdown.Item>

                        <NavDropdown.Divider />

                        <NavDropdown.Item onClick={props.handleLogout}>
                            Cerrar sesión
                        </NavDropdown.Item> 
                    </DropdownButton>
                    </>
                }

                </Nav>
            </Navbar.Collapse>
        </Navbar>


        
        <LoginModal show={showLoginModal} 
                    handleHide={handleHideLoginModal}
                    handleLoginSuccess={props.handleLoginSuccess}
        />
        
        <RegistroModal show={showRegistroModal} 
                       handleHide={handleHideRegistroModal}
        />

        <LoginPsicologo show={showPsicologoModal}
                        handleHide={handleHidePsicologoModal}
                        showRegistro={handleShowRegistroPsicologoModal}
                        handleLoginSuccess={props.handleLoginSuccess}
        />

        <RegistroPsicologo show={showRegistroPsicologoModal}
                           handleHide={handleHidePsicologoRegistroModal}
                           showLogin={handleShowPsicologoModal}
        />
    </>
    );
}