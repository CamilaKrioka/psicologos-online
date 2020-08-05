import React, {useEffect} from 'react';
import {Modal} from 'react-bootstrap';
import FormConsulta from '../pages/FormConsulta';

export default props =>{

    useEffect( () =>{
            if (props.idConsulta){
                alert('modo edición, debo cargar los datos con el id' + props.idConsulta)
            }
            else{
                alert('modo nuevo, debo resetear los campos del form')
            }
       } , [props.idConsulta]
    )

    return(
        <Modal show={props.show} onHide={props.handleHide} >
            <Modal.Header closeButton>
        
            </Modal.Header>

            <Modal.Body>

                    <FormConsulta onConsultaSaved={props.onConsultaSaved}/>

            </Modal.Body>

        </Modal>
    )
}