import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import Modal from './Modal';
import Swal from 'sweetalert2';
import {useHistory} from 'react-router-dom';

export default (props) =>{

    const history = useHistory(); 

    const handleLoginPsicologoClick = () =>{

        let url = 'http://localhost:8888/psicologos';

        let params = {
                        psicologo : nombrePsicologo,
                        password  : passwordPsicologo 
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
                    props.handleLoginSuccess(data.loggedUser);
                    props.handleHide();
                    history.push('/psicologo')
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

    const [ nombrePsicologo, setNombrePsicologo] = useState('');
    const [ passwordPsicologo, setPasswordPsicologo] = useState('');

    const handleNombrePsicologoChange = (event) => {
        setNombrePsicologo( event.target.value );
    }

    const handlePasswordPsicologoChange = (event) => {
        setPasswordPsicologo( event.target.value );
    }

    const handleOnClick = () =>{
        props.showRegistro()
        props.handleHide()
    }

 
    return(
        <>
            <Modal show={props.show} 
                   handleHide={props.handleHide}
                   title= 'Iniciar sesión como psicólogo'
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
                                              value={passwordPsicologo}
                                              onChange={handlePasswordPsicologoChange}
                                />
                            </Form.Group>

                            <Button variant="link" onClick={handleOnClick}                      
                            > 
                                ¿No tenes cuenta? Registrate
                            </Button>

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
                                        onClick={handleLoginPsicologoClick}
                                >
                                    Iniciar sesión
                                </Button>
                            </>

                          }
            />
        </>
    )
}