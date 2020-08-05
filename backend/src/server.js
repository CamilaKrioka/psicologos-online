const express = require('express');
const cors    = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const sessionRoutes = require('./routes/session_routes');
const pacienteRoutes = require('./routes/paciente_routes');
const consultasRoutes = require('./routes/consultas_routes');
const sessionPsicoRoutes = require('./routes/sessionPsico_routes');
const calendarioRoutes = require('./routes/consultasCalendario_routes');


const app = express();

app.use( bodyParser.urlencoded({extended: false}) )
app.use( bodyParser.json() );
app.use( fileUpload() );

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const auth = require('./auth'); //todavia no lo uso porque no tengo un sección restringida todavia

app.use( cors({
    credentials: true,
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type']
})
)

app.use( session({
                store  : new FileStore,
                secret : '123456',
                resave: false,
                saveUninitialized: true,
                name: 'cloneml'
            })
)

app.use('/auth', sessionRoutes);
app.use('/paciente', pacienteRoutes);
app.use('/consultas', consultasRoutes);
app.use('/psicologos', sessionPsicoRoutes);
app.use('/calendario', calendarioRoutes);

app.listen(8888, ()=>{ console.log('Escuchando desde el server...')} );