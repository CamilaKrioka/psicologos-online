import React from 'react';
import './Pasos.css';
import logo from '../images/pasos.png';
import {Row, Col, Button, Container} from 'react-bootstrap';

export default (props) =>{
    return(
        <>


            <div className="somdra">
        
                <Container className="mt-4">
                    <Row className="d-flex justify-content-center">

                        <Col xs={12} md={6} xl={6} className="fondo-pasos align-items-center">
                            <img src={logo} className="img-fluid" alt="imagen de home" />
                        </Col>

                        <Col xs={10} md={6} xl={6} className="text-left text-md-left align-items-center">

                            <h1 className='font-weight-bolder display-3 mobile'>
                                Empieza ya tu sesión
                            </h1>
                            <p className="h5">
                                Aquí te cuento como funciona Sigmund,  
                                solo tienes que seguir estos sencillos pasos:
                            </p>

                            <p className="m-2">
                                <ol>
                                    <li> Crea tu perfil y rellena tus datos.</li>
                                    <li> Primero tendremos una conversación contigo, para poder ver cuál es la mejor manera de ayudarte.</li>
                                    <li> Seleccioná tu psicólogo.</li>
                                    <li> Disfruta de tus sesiones por videollamada.</li>
                                </ol>
                            </p>

                            <Button variant="outline-info mb-3" onClick={props.showRegistro}>Registrate</Button>

                        </Col>

                    </Row>
                </Container>

            </div>
        </>
    )
}