import React from 'react';
import './QuienesSomos.css';
import {Col, Row, Container, Button} from 'react-bootstrap';
import logo from '../images/home.svg';

export default (props) =>{
    return(
        <>
            <div id="quienes-somos" className="somdra">
        
                <Container className="mt-4">
                    <Row className="d-flex align-items-center">

                        <Col xs={10} md={6} xl={6} className="text-center text-md-left align-items-center">
                        <h1 className='font-weight-bolder display-3 mobile'>
                            Tu psicólogo online
                        </h1>
                        <p className="h5">
                            Sigmund es el primer servicio de orientación psicológica online, 
                            especializado en problemas del día a día. 
                        </p>
                        <p>
                            Habla con un psicólogo profesional cuando realmente lo necesitas.
                            y además de sentirte mejor, ahorrarás tiempo y dinero.
                        </p>
                        <Button className="m-3" variant="outline-info" onClick={props.showRegistro}>Comienza ahora</Button>
                        </Col>

                        <Col xs={12} md={6} xl={6} className="fondo-quienes-somos align-items-center">
                            <img src={logo} className="img-fluid" alt="imagen de home" />
                        </Col>

                    </Row>
                </Container>

            </div>
        </>
    )
}