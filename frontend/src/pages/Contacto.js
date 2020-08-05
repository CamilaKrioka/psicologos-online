import React from 'react';
import {Form, Button} from 'react-bootstrap';

export default () =>{
    
    return(
        <>
            <div className="d-flex justify-content-center">
                <div>
                    <h1 className="m-5">Contactanos por cualquier consulta que tengas</h1>

                    <p className="lead mb-4">Indícanos tus dudas y nos pondremos en contacto contigo lo antes posible.</p>

                    <Form>
        
                        <Form.Group className="mb-4">
                            <Form.Control type="text" placeholder="Nombre"/> 
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Control type="email" placeholder="Email"/>
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Control as="textarea" rows="3" placeholder="Contanos tus consultas"/>
                        </Form.Group>

                        <Button variant="info">Enviar</Button>

                    </Form>
                </div>
            </div>
        </>
    )

}