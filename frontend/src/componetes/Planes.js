import React from 'react';
import './Planes.css';
import {Col, Row, Container, Button} from 'react-bootstrap';
import logo from '../images/planes.png';

export default (props) =>{
    return(
        <>
            <div id="nuestros-planes" className="somdra">
        
                <Container className="mt-4">
                    <Row className="d-flex align-items-center">

                        <Col xs={10} md={6} xl={6} className="text-md-left align-items-center">
                        <h1 className='font-weight-bolder display-3 mobile'>
                            Sesiones cortas y económicas
                        </h1>
                        <p className="h5 m-3">
                            ¿Cuánto cuesta una sesión de terapia Online?
                            $400 
                        </p>
                        <p className="m-2">
                            <ul>
                                <li>Incluye 1 videollamada de una hora</li>
                                <li>Chat abierto con tu psicólogo</li>
                                <li>Date de baja cuando quieras</li>
                                <li>Cambio de profesional si no estás satisfecho</li>
                                <li>Comunícate desde donde quieras, de forma segura y confidencial.</li>
                            </ul>
                        </p>
                        <Button className="m-3" variant="outline-info" onClick={props.showRegistro}>Reserva una cita ahora</Button>
                        </Col>

                        <Col xs={12} md={6} xl={6} className="fondo-planes align-items-center">
                            <img src={logo} className="img-fluid" alt="imagen de planes" />
                        </Col>

                    </Row>
                </Container>

            </div>
        </>
    )
}