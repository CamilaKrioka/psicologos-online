import React, {useState} from 'react';
import Modal from './Modal';
import {Form, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';

export default (props) =>{

    const handleRegistroClick = () => {
        let url = 'http://localhost:8888/psicologos/registro'

        let params = {
                        nombre    : nombrePsicologo,
                        password  : password,
                        matricula : matricula,
                        tarifa    : tarifa
                     }

        fetch(url, {
                        method : 'POST',
                        credentials : 'include',
                        body : JSON.stringify( params ),
                        headers: {
                                    'Content-Type' : 'application/json'
                                 }
                   }
        ).then( response => response.json() )
        .then( data =>{
                if ( data.status === 'ok'){
                    props.handleHide();
                    Swal.fire(
                        {
                            text: data.message,
                            icon: 'success' 
                        }
                    )
                    props.showLogin();
                }else{
                    Swal.fire(
                        {
                            text: data.message,
                            icon: 'error' 
                        }
                    )
                }
            }
        )
    }

    const [ nombrePsicologo, setNombrePsicologo ] = useState('')

    const [ password, setPassword ] = useState('')

    const [ matricula, setMatricula ] = useState('')

    const [ tarifa, setTarifa ] = useState('')

    const handleNombrePsicologoChange = (event) =>{
        setNombrePsicologo( event.target.value )
    }

    const handlePasswordChange = (event) =>{
        setPassword( event.target.value )
    }

    const handleMatriculaChange = (event) =>{
        setMatricula( event.target.value )
    }

    const handleTarifaChange = (event) =>{
        setTarifa( event.target.value )
    }


    return (
        <>
            <Modal show={props.show} 
                   handleHide={props.handleHide}
                   title="registrarme como psicologo" 
                   body={
                          <>
                            <Form.Group>
                            <Form.Label>Nombre de usuario</Form.Label>

                            <Form.Control type="text" 
                                          value={nombrePsicologo}
                                          onChange={handleNombrePsicologoChange}
                            />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Contraseña</Form.Label>

                                <Form.Control type="password"
                                              value={password}
                                              onChange={handlePasswordChange}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Matricula</Form.Label>

                                <Form.Control type="number"
                                              value={matricula}
                                              onChange={handleMatriculaChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlSelect1">

                                <Form.Label>Tarifa</Form.Label>

                                <Form.Control as="select" required="required"
                                                          value={tarifa}
                                                          onChange={handleTarifaChange} 
                                >   
                                    <option>-Seleccione-</option>
                                    <option value="1">$ 300</option>
                                    <option value="2">$ 500</option>
                                    <option value="3">$ 800</option>
                                </Form.Control>

                            </Form.Group>
                          </>
                        }
                   footer={
                            <>
                                <Button variant="secondary" onClick={props.handleHide}>Cancelar</Button>

                                <Button variant="primary"
                                        onClick={handleRegistroClick}
                                        
                                >
                                    Registrarse
                                </Button>
                            </>
                          }
            />
        </>
    )
}