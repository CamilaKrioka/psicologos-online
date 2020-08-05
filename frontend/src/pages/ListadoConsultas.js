import React, {useState, useEffect} from 'react';
import './ListadoConsultas.css';
import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import Modal from '../componetes/Modal';
import FormConsulta from './FormConsulta';

export default (props) =>{

    const [ consultas, setConsultas ] = useState([])

    const [ showConsultaEditorModal, setShowConsultaModalEditModal ] = useState(false);

    const [ selectedConsulta, setSelectedConsulta ] = useState(null);

    const formateoFecha = (fecha) =>{
        return fecha.replace(":00.000Z", '')
    }

    const handleHideConsultaEditorModal = () =>{
        setSelectedConsulta(null);
        setShowConsultaModalEditModal(false);
    }

    const onShowConsultaEditorModal = () =>{
        setSelectedConsulta (null);
        setShowConsultaModalEditModal(true);
    }

    const handleEditClick = (id_consulta) =>{
        setSelectedConsulta(id_consulta)
        setShowConsultaModalEditModal(true)
    }

    const handleDeleteClick = (idConsulta) =>{
        Swal.fire({
            title : '¿Confirma que desea eliminar la publicación?',
            icon : 'question',
            showCancelButton : true,
            confirmButtonText : 'Aceptar',
            cancelButtonText : 'Cancelar'
        }).then( result =>{
            if ( result.value ){

                fetch(`http://localhost:8888/consultas/${idConsulta}`,
                    {
                        method      : 'DELETE',
                        credentials : 'include'
                    }
                ).then(
                    response => response.json()
                ).then(
                    data =>{
                        if ( data.status === 'ok' ){
                            Swal.fire({
                                text : data.message,
                                icon : 'success'
                            })

                            cargarListadoConsultas();
                        }
                        else{
                            Swal.fire({
                                text : data.message,
                                icon : 'error'
                            })
                        }
                    }
                )
            }
        })
    }

    const handleConsultaSaved = (message)=> {
        setShowConsultaModalEditModal(false);
        cargarListadoConsultas();

        Swal.fire(
            {
               text: message,
               icon: 'success' 
            }
        )
    }

    let endpoint = 'consultas';

    if ( props.user && props.type === 'misconsultas'){
        endpoint = 'consultas/user/' + props.user.id;
    }

    const cargarListadoConsultas = ()=>{

        fetch(
            `http://localhost:8888/${endpoint}`
        ).then(
            response => response.json()
        ).then(
            data => {
                setConsultas(data)
            }
        )
   }
    
    useEffect( cargarListadoConsultas, [] );

    return(
        <>
            <div className="listado-consultas">
                <div>

                    <div class="row">
                        <div class="col">
                            <h1>Listado de consultas</h1>
                        </div>
                    </div>

                    <div class="row my-3">
                        <div class="col">
                            <Button onClick={onShowConsultaEditorModal}>Nueva consulta</Button>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <table class="table">

                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Fecha</th>
                                        <th>Semanal</th>
                                        <th>Paciente</th>
                                        <th>Psicólogo</th>
                                        <th>Tipo de consulta</th>
                                    </tr>
                                </thead>

                                <tbody id="listado-paciente">{ 
                                                                consultas.map( consulta =>{
                                                                        return(
                                                                            <tr>
                                                                                <td>{ consulta.id_consulta }</td>
                                                                                <td>{ formateoFecha(consulta.fecha_consulta) }</td>
                                                                                <td>{ consulta.semanal_consulta }</td>
                                                                                <td>{ consulta.id_paciente }</td>
                                                                                <td>{ consulta.id_psicologo }</td>
                                                                                <td>{ consulta.id_tipodeconsulta }</td>

                                                                                <Button className="mr-1"
                                                                                        variant="outline-secondary"
                                                                                        onClick={ () =>{ handleEditClick(consulta.id_consulta) } }
                                                                                >
                                                                                    <FontAwesomeIcon color="green" icon={faEdit} />
                                                                                </Button>

                                                                                <Button variant="outline-secondary"
                                                                                        onClick={ () =>{ handleDeleteClick(consulta.id_consulta) } }>
                                                                                    <FontAwesomeIcon color="red" icon={faTrash} />
                                                                                </Button>
                                                                            </tr>
                                                                        )
                                                                    }
                                                                ) 
                                                            }
                                </tbody>

                            </table>
                        </div>
                    </div>

                </div>
            </div>

            

            <Modal show={showConsultaEditorModal}
                   handleHide={handleHideConsultaEditorModal}
                   title="Agendar una consulta"
                   body={ <FormConsulta onConsultaSaved={ handleConsultaSaved }
                                        idConsulta={ selectedConsulta }
                                        formateoFecha={formateoFecha}
                          /> 
                        }
            />
        </>
    )
}