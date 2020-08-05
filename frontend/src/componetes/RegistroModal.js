import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import Modal from './Modal';
import Swal from 'sweetalert2';

export default (props) =>{

    const handleRegistroClick = () =>{
        let url = 'http://localhost:8888/auth/registro';

        let params = {
                        user : nombreUsuario,
                        nombre : nombreCompleto,
                        password : password,
                        dni : dni
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

    const [ nombreUsuario, setNombreUsuario ] = useState('');

    const [ nombreCompleto, setNombreCompleto ] = useState('');

    const [ password, setPassword ] = useState('');

    const [ dni, setdni ] = useState('');

    const handleUserNameChange = (event) =>{
        setNombreUsuario( event.target.value );
    }

    const handleNombreCompletoChange = (event) =>{
        setNombreCompleto( event.target.value );
    }

    const handlePasswordChange = (event) =>{
        setPassword( event.target.value );
    }

    const handledniChange = (event) =>{
        setdni( event.target.value );
    }

    return(
        <>
            <Modal show={props.show} 
                   handleHide={props.handleHide}
                   title="Registrarse"
                   body={
                          <>
                            <Form.Group>
                                <Form.Label>Nombre de usuario</Form.Label>

                                <Form.Control type="text" 
                                            value={nombreUsuario}
                                            onChange={handleUserNameChange}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Nombre Completo</Form.Label>

                                <Form.Control type="text"
                                            value={nombreCompleto}
                                            onChange={handleNombreCompletoChange} 
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
                                <Form.Label>DNI</Form.Label>

                                <Form.Control type="number"
                                            value={dni}
                                            onChange={handledniChange} 
                                />
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