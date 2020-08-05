import React from 'react';
import './PerfilPaciente.css';
import ListadoConsultas from './ListadoConsultas';
import Calendario from '../componetes/Calendario';

export default (props) =>{
    return(
        <>
            <div className="perfil-paciente">

                <h1 className="ml-5">Perfil del paciente</h1>

                <Calendario type='paciente' user={props.user}/>

                <ListadoConsultas type="misconsultas"
                                  user={ props.user }
                />
                
            </div>
        </>
    )
}