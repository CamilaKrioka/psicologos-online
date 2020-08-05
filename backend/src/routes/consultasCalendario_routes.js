const express = require('express');
const router = express.Router();
const conexion = require('../connection');

router.get('/psicologo/:id', (req, res) => {
        sql = `SELECT paciente.nombre_paciente AS title, fecha_consulta AS start, fecha_consulta  AS end
                FROM consulta 
                INNER JOIN paciente ON consulta.id_paciente = paciente.id_paciente
                WHERE id_psicologo = ${req.params.id}
            `;
        
        conexion.query(sql, (err, result, fields) =>{
                if (err) throw err;
                

                res.json(result);
            }
        )
    }
)

router.get('/paciente/:id', (req, res) => {
    sql = `SELECT psicologo.nombre_psicologo AS title, fecha_consulta AS start, fecha_consulta  AS end
             FROM consulta 
            INNER JOIN psicologo ON consulta.id_psicologo = psicologo.id_psicologo
            WHERE id_paciente = ${req.params.id}
        `;
    
    conexion.query(sql, (err, result, fields) =>{
            if (err) throw err;
            

            res.json(result);
        }
    )
}
)

module.exports = router;