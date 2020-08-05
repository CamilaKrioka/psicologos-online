import React, {useState, useEffect} from 'react';
import './FormConsulta.css';
import {Form, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';

export default (props) =>{

    const [ consultaFecha, setConsultaFecha ] = useState('')

    const [ consultaSemanalOcasional, setConsultaSemanalOcasional ] = useState('')

    const [ consultaPsicologo, setConsultaPsicologo ] = useState('')

    const [ consultaTipoDeConsulta, setConsultaTipoDeConsulta ] = useState('')

    const handleConsultaFechaChange = (event) =>{
        setConsultaFecha( event.target.value );
    }

    const handleConsultaSemanalOcasional = (event) =>{
        setConsultaSemanalOcasional( event.target.value );
    }

    const handleConsultaPsicologo = (event) =>{
        setConsultaPsicologo( event.target.value );
    }

    const handleConsultaTipoDeConsulta = (event) =>{
        setConsultaTipoDeConsulta( event.target.value );
    }

    const handleSave = () =>{

        const formData = new FormData();

        formData.append('consultaFecha', consultaFecha);
        formData.append('consultaSemanalOcasional', consultaSemanalOcasional);
        formData.append('consultaPsicologo', consultaPsicologo);
        formData.append('consultaTipoDeConsulta', consultaTipoDeConsulta);

        let url = 'http://localhost:8888/consultas';
        let method = 'POST';

        if ( props.idConsulta) {
            url += '/' + props.idConsulta;
            method = 'PUT';
        }

        fetch( url, {
            method : method,
            body : formData,
            credentials : 'include'
        }
        ).then( response => response.json() )
         .then( data => {
             
                if ( data.status === 'ok'){
                    props.onConsultaSaved(data.message);
                }
                else{
                    Swal.fire(
                        {
                           text: data.message,
                           icon: 'error' 
                        }
                    )
                }
            }
        ).catch( error =>{
                console.log('Error');
            }
        )

    }

    useEffect( () =>{
            if (props.idConsulta){
                fetch(`http://localhost:8888/consultas/` + props.idConsulta)
                .then(
                    response => response.json()
                ).then(
                    data =>{
                        setConsultaFecha( props.formateoFecha(data.fecha) )
                        setConsultaSemanalOcasional(data.semanalOcasional)
                        setConsultaPsicologo(data.psicologo)
                        setConsultaTipoDeConsulta(data.tipo)
                    }
                )
            }
            
        } , [props.idConsulta]
    )

    return(
        <>
            <div className="formulario">
                <Form className="m-5">

                    <Form.Group>
                        <Form.Label for="fecha">Fecha y hora</Form.Label> 
                        <Form.Control required="required"
                                      type="datetime-local"
                                      value={consultaFecha}
                                      onChange={handleConsultaFechaChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">

                        <Form.Label>¿La consulta es ocasional o semanal?</Form.Label>

                        <Form.Control as="select" required="required"
                                                  onChange={handleConsultaSemanalOcasional} 
                                                  value={consultaSemanalOcasional} 
                        >   
                            <option>-Seleccione-</option>
                            <option value="1">Semanal</option>
                            <option value="0">Ocasional</option>
                        </Form.Control>

                        <span className="form-text text-muted">Si la consulta es una sola seleccione ocasional, si la consulta es una vez por semana seleccione semanal.</span>

                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect2">

                        <Form.Label>Psicólogo</Form.Label>

                        <Form.Control as="select" required="required"
                                                  onChange={handleConsultaPsicologo}
                                                  value={consultaPsicologo}
                        >
                            <option>-Seleccione-</option>
                            <option value="1">Martin</option>
                            <option value="2">Leandro</option>

                        </Form.Control>

                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect3">
                        <Form.Label>Modo de consulta</Form.Label>
                        <Form.Control as="select" required="required"
                                                  onChange={handleConsultaTipoDeConsulta}
                                                  value={consultaTipoDeConsulta}
                        >
                            <option>-Seleccione-</option>
                            <option value="1">Skype</option>
                        </Form.Control>
                    </Form.Group>


                    <Button onClick={ handleSave } 
                            variant="primary" 
                            
                    >
                        Agendar consulta
                    </Button>
              
                </Form>
            </div>
        </>
    )
}