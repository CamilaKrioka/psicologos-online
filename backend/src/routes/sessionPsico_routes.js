const express = require('express');
const router = express.Router();
const conexion = require('../connection');

router.post('/', (req, res) =>{

        let sql = `
                    SELECT *
                      FROM psicologo
                     WHERE nombre_psicologo = ?
                       AND password_psicologo = ?
                  `;

        let values = [
                        req.body.psicologo,
                        req.body.password
                     ]

        conexion.query(sql, values, (err, result, fields) =>{
                if ( err ){
                    res.json(
                        {
                            status : 'error',
                            message : 'No es posible acceder en este momento. Intente nuevamente en unos minutos.'
                        }
                    )
                }
                else{

                    if( result.length == 1 ){
                        req.session.user   = result[0].nombre_psicologo;
                        req.session.userId = result[0].id_psicologo;

                        res.json(
                            {
                                status     : 'ok',
                                message    : 'Sesión iniciada',
                                loggedUser : {
                                                id     : req.session.userId,
                                                nombre : req.session.user,
                                                type : 'psicologo'
                                             }
                            }
                        )
                    }
                    else{
                        res.json(
                            {
                                status : 'error',
                                message : 'Usuario y/o contraseña no validos'
                            }
                        )
                    }
                }
            }
        )
    }
)

router.post("/registro", (req, res) => {

    console.log(req.query);

    let consulta = `INSERT INTO psicologo(nombre_psicologo, password_psicologo, matricula_psicologo, id_tarifa) 
                    VALUES( 
                            "${req.body.nombre}", 
                            "${req.body.password}",
                            "${req.body.matricula}",
                            "${req.body.tarifa}"
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