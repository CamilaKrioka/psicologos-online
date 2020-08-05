import React, {useEffect, useState} from 'react';

import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useHistory } from 'react-router-dom';

const localizer = momentLocalizer(moment);

require('moment/locale/es.js');

export default (props) =>{

    const history = useHistory();

    const [ consultas, setConsultas ] = useState([])

    let endpoint;

    if ( props.user && props.type === 'paciente'){
        endpoint = 'paciente/' + props.user.id;
    }
    else if(props.user){
        endpoint = 'psicologo/' + props.user.id;
    }
    else{
        history.push('/')
    }

    const cargarCalendario = () => {
            fetch(`http://localhost:8888/calendario/${endpoint}`
            ).then(
                response => response.json()
            ).then(
                data=>{
                    setConsultas(data)
                }
            )
        }

    useEffect( cargarCalendario, [] );

    return(
        <>
            <h2 className="m-5">Calendario de consultas</h2>

            <div className="d-flex justify-content-center m-5">
                
                <Calendar 
                    localizer={localizer}
                    events={consultas}
                    style={{ width: '75vw', height: '85vh'}}
                    messages={
                        {
                            next: 'Siguiente',
                            previous: 'Anterior',
                            today: 'Hoy',
                            month: 'Mes',
                            week: 'Semana',
                            day: 'Día'
                        }
                    }
                />

            </div>
        </>
    )
}