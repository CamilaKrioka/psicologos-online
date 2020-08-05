const express = require('express');
const router = express.Router();
const conexion = require('../connection');

router.post('/', (req, res) =>{

        let sql = `
                    SELECT *
                    FROM paciente
                    WHERE nick_paciente   = ?
                    AND password_paciente = ?
                `;
        
        let values = [
                        req.body.user,
                        req.body.password
                     ]

        conexion.query(sql, values, (err, result, fields) =>{

                if ( err ) {
                    res.json(
                        {
                            status : 'error',
                            message : 'No es posible acceder en en este momento. Intenté nuevamente en unos minutos'
                        }
                    )
                }
                else{
                    if( result.length == 1 ){

                        req.session.user   = result[0].nick_paciente;
                        req.session.userId = result[0].id_paciente;
            
                        res.json(
                            {
                                status     : 'ok',
                                message    : 'sesión iniciada',
                                loggedUser : {
                                                id     : req.session.userId,
                                                nombre : req.session.user,
                                                type : 'paciente'
                                             }
                            }
                        )
                    }
                    else{
                        res.json(
                            {
                                status  : 'error',
                                message : 'Usuario y/o contraseña invalidos'
                            }
                        )
                    }
                }
            }
        )
    }
)

router.delete('/', (req, res) =>{
        req.session.destroy( err =>{
                if ( err ){
                    res.json(
                        {
                            status  : 'error',
                            message : 'Error al cerrar la sesión'
                        }
                    )
                }else{
                    res.clearCookie('sigmund');
                    res.json(
                        {
                            status  : 'ok',
                            message : 'Sesión cerrada'
                        }
                    )
                }
            }
        )
    }
)

router.post("/registro", (req, res) => {

    console.log(req.query);

    let consulta = `INSERT INTO paciente(nick_paciente, nombre_paciente, password_paciente, dni_paciente) 
                    VALUES( 
                            "${req.body.user}", 
                            "${req.body.nombre}",
                            "${req.body.password}",
                            ${req.body.dni}
                          )`;

    conexion.query(consulta,
            function(err, result, fields){
                if ( err ){
                    res.json(
                        {
                            status  : 'error',
                            message : 'Error al registrarse'
                        }
                    )
                }else{
                    res.json(
                        {
                            status  : 'ok',
                            message : 'Usuario registrado con exito!'
                        }
                    )
                }
            }
        );
} );

module.exports = router;