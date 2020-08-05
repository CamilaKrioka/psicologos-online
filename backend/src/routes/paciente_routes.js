const express = require('express');
const router = express.Router();
const conexion = require('../connection');

router.get('/', (req, res)=>{
    conexion.query("SELECT * FROM paciente",
        function(err, result, fields){

            if ( err ) throw err;

            res.json(result);
            }
        );
});

router.get("/:id", (req, res) => {
    conexion.query("SELECT * FROM paciente WHERE id_paciente=" + req.params.id,
            function(err, result, fields){

                if ( err ) throw err;

                res.json(result);
            }
        );
} );

module.exports = router;