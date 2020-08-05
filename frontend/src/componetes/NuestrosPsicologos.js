import React from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import psicologo1 from '../images/psicologos/hannah-gullixson.jpg';
import psicologo2 from '../images/psicologos/brendan-hollis.jpg';
import psicologo3 from '../images/psicologos/hassler-mendoza.jpg';
import psicologo4 from '../images/psicologos/steven-aguilar.jpg';

export default () =>{
    return(
        <>
            <div id="nuestros-psicologos" className="somdra mt-4">
        
                <div className="p-4">
                    <div className="text-center text-md-center">
                        <h1 className="font-weight-bolder display-3 mobile mb-3">
                            Nuestros psicologos
                        </h1>

                        <p className="h5 mb-3"> 
                            Consulta los perfiles de todos nuestros psicólogos y elige con quién quieres empezar hablar.
                        </p>
                    </div>

                    <Row>
                        <Col xl={3}>
                            <Card style={{ width: '18rem' }}>

                                <Card.Img variant="top" src={psicologo1} alt="foto de nuestros psicólogos" />

                                <Card.Body>
                                    <Card.Title>Siavosh Hosseini</Card.Title>
                                    
                                    <Card.Text>
                                        A través de un tratamiento personalizado te ayudaré a clarificar tus pensamientos y 
                                        sentimientos para que puedas tener completa aceptación y éxito.
                                    </Card.Text>
                                    <Link to="/nuestrospsicologos">
                                        <Button variant="outline-info">Conoce más</Button>
                                    </Link>
                                </Card.Body>

                            </Card>
                        </Col>

                        <Col xl={3}>
                            <Card style={{ width: '18rem' }}>

                                <Card.Img variant="top" src={psicologo2} alt="foto de nuestros psicólogos" />

                                <Card.Body>
                                    <Card.Title>Brendan Hollis</Card.Title>
                                    
                                    <Card.Text>
                                        Ofrezco un plan psicoterapéutico con el fin de cumplir los objetivos; 
                                        al proporcionar las herramientas necesarias que fortalezcan la toma de decisiones.
                                    </Card.Text>

                                    <Link to="/nuestrospsicologos">
                                        <Button variant="outline-info">Conoce más</Button>
                                    </Link>
                                </Card.Body>

                            </Card>
                        </Col>

                        <Col xl={3}>
                            <Card style={{ width: '18rem' }}>

                                <Card.Img variant="top" src={psicologo3} alt="foto de nuestros psicólogos" />

                                <Card.Body>
                                    <Card.Title>Hassler Mendoza</Card.Title>
                                    
                                    <Card.Text>
                                        Hago mi trabajo con responsabilidad y amor, para que juntos encontremos las soluciones más adecuadas para superar situaciones difíciles en su vida.
                                    </Card.Text>

                                    <Link to="/nuestrospsicologos">
                                        <Button variant="outline-info">Conoce más</Button>
                                    </Link>
                                </Card.Body>

                            </Card>
                        </Col>

                        <Col xl={3}>
                            <Card style={{ width: '18rem' }}>

                                <Card.Img variant="top" src={psicologo4} alt="foto de nuestros psicólogos" />

                                <Card.Body>
                                    <Card.Title>Hannah Guillixson</Card.Title>
                                    
                                    <Card.Text>
                                        Te ofrezco evaluación, diagnostico.
                                        Mi principal interés es ayudarte a recuperar el equilibrio emocional, social, laboral, y familiar que necesitas.
                                    </Card.Text>

                                    <Link to="/nuestrospsicologos">
                                        <Button variant="outline-info">Conoce más</Button>
                                    </Link>
                                </Card.Body>

                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}