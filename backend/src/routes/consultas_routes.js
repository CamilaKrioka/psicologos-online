const express = require('express');
const router = express.Router();
const conexion = require('../connection');

router.get('/', (req, res)=>{
    conexion.query("SELECT * FROM consulta",
        function(err, result, fields){

            if ( err ) throw err;

            res.json(result);
            }
        );
});

router.post("/", (req, res) => {

    console.log(req.body);

    let sqlInsert = `INSERT INTO consulta(fecha_consulta, semanal_consulta, id_paciente, id_psicologo, id_tipodeconsulta) 
                    VALUES( '${req.body.consultaFecha}',
                            ${req.body.consultaSemanalOcasional},
                            ${req.session.userId},
                            ${req.body.consultaPsicologo},
                            ${req.body.consultaTipoDeConsulta}
                            )`;

    conexion.query(sqlInsert,
            function(err, result, fields){
                if ( err ) {

                    res.json(
                        {
                            status  : 'error',
                            message : 'Error al agregar la consulta'
                        }
                    );
                }
                else{

                    res.json(
                        {
                            status  : 'ok',
                            message : 'La consulta se agregó!'
                        }
                    );
                }
            }
        );
} );

router.get('/user/:id', (req, res)=>{

        let sql = `
                    SELECT id_consulta, fecha_consulta, semanal_consulta, id_paciente, id_psicologo, id_tipodeconsulta
                    FROM consulta
                    WHERE id_paciente = ${req.params.id}
                  `;

        conexion.query(sql, function(err, result, fields){
                if ( err ) throw err;

                res.json(result);
            }
        )
    }
);

router.get('/:id', (req, res)=>{

    sqlSelect = `SELECT fecha_consulta AS fecha, semanal_consulta AS semanalOcasional, id_psicologo AS psicologo, id_tipodeconsulta AS tipo
                   FROM consulta 
                  WHERE id_consulta = ${req.params.id}
                `;

    conexion.query( sqlSelect,
        function(err, result, fields){

            if ( err ) throw err;

            res.json(result[0]);
            }
        );
});

router.put("/:id", (req, res) => {

    console.log(req.body);

    let sqlUpdate = `UPDATE consulta
                        SET fecha_consulta = ?, 
                            semanal_consulta = ?,
                            id_paciente = ?, 
                            id_psicologo = ?, 
                            id_tipodeconsulta = ?
                      WHERE id_consulta = ?
                    `;

    let values = [ 
                    req.body.consultaFecha,
                    req.body.consultaSemanalOcasional,
                    req.session.userId,
                    req.body.consultaPsicologo,
                    req.body.consultaTipoDeConsulta,
                    req.params.id
                 ]

    conexion.query(sqlUpdate, values,
            function(err, result, fields){
                if ( err ) {

                    res.json(
                        {
                            status  : 'error',
                            message : 'Error al modificar la consulta'
                        }
                    );
                }
                else{

                    res.json(
                        {
                            status  : 'ok',
                            message : 'La consulta se modificó correctamente!'
                        }
                    );
                }
            }
        );
    } 
);

router.delete('/:id', (req, res) =>{
        let sqlDelete = `DELETE FROM consulta
                          WHERE id_consulta = ?
                        `;
        values = [ req.params.id ];

        conexion.query(sqlDelete, values, (err, result, fields) =>{
                if ( err ){
                    res.json(
                        {
                            status: 'error',
                            message: 'Error al eliminar la publicación'
                        }
                    )
                }
                else{
                    res.json(
                        {
                            status: 'ok',
                            message: 'La publicación se eliminó correctamente'
                        }
                    )
                }
            }
        )
    }
)

module.exports = router;