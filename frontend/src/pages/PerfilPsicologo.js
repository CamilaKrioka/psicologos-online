import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './PerfilPsicologo.css';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Calendario from '../componetes/Calendario';

export default (props) =>{

    return(
        <>
            <div className="perfil-psicologo ml-5">

                <h1>Perfil psicólogo</h1>
  
            </div>

            <Calendario type='psicologo' user={props.user}/>

            <Link to="/consultas">
                    <Button className="m-1" variant="info">Ver consultas</Button>
            </Link>

        </>
    )
    
}