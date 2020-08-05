import React from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import psicologo1 from '../images/psicologos/hannah-gullixson.jpg';
import psicologo2 from '../images/psicologos/brendan-hollis.jpg';
import psicologo3 from '../images/psicologos/hassler-mendoza.jpg';
import psicologo4 from '../images/psicologos/steven-aguilar.jpg';

export default () =>{
    return (
        <>
            <div className="m-3">
                <h1 className="font-weight-bolder display-3 mobile mb-3">
                    Nuestros psicologos
                </h1>

                <p className="h5 mb-3"> 
                    Consulta los perfiles de todos nuestros psicólogos y elige con quién quieres empezar hablar.
                </p>
            </div>

            <Card className="m-3" style={{ width: '50rem' }}>
                <Row className="no-gutters">

                    <Col>
                        <img src={psicologo1}  className="img-fluid card-img" alt="..." />
                    </Col>

                    <Col>
                        <Card.Body>
                            <Card.Title clasName="h5">Siavosh Hosseini</Card.Title>

                            <Card.Text>
                                <p>
                                    A través de un tratamiento personalizado te ayudaré a clarificar tus pensamientos y 
                                    sentimientos para que puedas tener completa aceptación y éxito.
                                </p>

                                <p>
                                    Especialidad: Cognitivo - conductual
                                </p>

                                <small class="text-muted">Cédula: 09990308</small>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>

            <Card className="m-3" style={{ width: '50rem' }}>
                <Row className="no-gutters">

                    <Col>
                        <img src={psicologo2}  className="img-fluid card-img" alt="..." />
                    </Col>

                    <Col>
                        <Card.Body>
                            <Card.Title clasName="h5">Brendan Hollis</Card.Title>

                            <Card.Text>
                                <p>
                                    Ofrezco un plan psicoterapéutico con el fin de cumplir los objetivos; 
                                    al proporcionar las herramientas necesarias que fortalezcan la toma de decisiones.
                                </p>

                                <p>
                                    Especialidad: Psicoanálisis
                                </p>

                                <small class="text-muted">Cédula: 08890408</small>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>

            <Card className="m-3" style={{ width: '50rem' }}>
                <Row className="no-gutters">

                    <Col>
                        <img src={psicologo3}  className="img-fluid card-img" alt="..." />
                    </Col>

                    <Col>
                        <Card.Body>
                            <Card.Title clasName="h5">Hassler Mendoza</Card.Title>

                            <Card.Text>
                                <p>
                                    Hago mi trabajo con responsabilidad y amor, para que juntos encontremos las soluciones más adecuadas para superar situaciones difíciles en su vida.
                                </p>

                                <p>
                                    Especialidad: Psicoanálisis
                                </p>

                                <small class="text-muted">Cédula: 07770409</small>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>

            <Card className="m-3" style={{ width: '50rem' }}>
                <Row className="no-gutters">

                    <Col>
                        <img src={psicologo4}  className="img-fluid card-img" alt="..." />
                    </Col>

                    <Col>
                        <Card.Body>
                            <Card.Title clasName="h5">Hannah Guillixson</Card.Title>

                            <Card.Text>
                                <p>
                                    Te ofrezco evaluación, diagnostico.
                                    Mi principal interés es ayudarte a recuperar el equilibrio emocional, social, laboral, y familiar que necesitas.
                                </p>

                                <p>
                                    Especialidad: Cognitivo - conductual
                                </p>

                                <small class="text-muted">Cédula: 06690406</small>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </>
    )
}