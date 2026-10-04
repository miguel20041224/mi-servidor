const express = require('express');

const app = express();

app.use(express.json());

const usuarioRoutes = require('./routes/usuario.routes');
app.use('/usuarios', usuarioRoutes);

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
