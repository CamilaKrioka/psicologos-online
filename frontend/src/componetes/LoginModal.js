import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import Modal from './Modal';
import Swal from 'sweetalert2';

export default (props) =>{

    const handleLoginClick = ()=>{
        
        let url = 'http://localhost:8888/auth';

        let params = {
                        user : nombreUsuario,
                        password : password
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
                    console.log(data.loggedUser)
                    props.handleLoginSuccess(data.loggedUser);
                    props.handleHide();
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

    const [nombreUsuario, setNombreUsuario] = useState('');
    const [password, setPassword] = useState('');

    const handleUserNameChange = (event) =>{
        setNombreUsuario( event.target.value );
    }

    const handlePasswordChange = (event) =>{
        setPassword( event.target.value );
    }

    return(
        <>
            <Modal show={props.show} 
                   handleHide={props.handleHide}
                   title="Iniciar sesión"
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
                                <Form.Label>Contraseña</Form.Label>

                                <Form.Control type="password"
                                            value={password}
                                            onChange={handlePasswordChange} 
                                />
                            </Form.Group>
                          </>
                        }  
                   footer={
                            <>
                                <Button variant="secondary" 
                                        onClick={props.handleHide}
                                >
                                    Cancelar
                                </Button>

                                <Button variant="primary"
                                        onClick={handleLoginClick}
                                >
                                    Iniciar sesión
                                </Button>
                            </>

                          }
            />
        </>
    )
}