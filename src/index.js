const express = require('express');
const app = express();
const port = process.env.PORT||9000;
const userRoutes = require("./routes/users");

app.listen(port, ()=> console.log('server listening on port', port));
require("dotenv").config()

//routes
app.get('/', (req, res)=> {
    res.send('Bienvenidos a la plataforma de envio de paquetes')
});

app.use(express.json());
app.use('/api', userRoutes);

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

//mongodb connection
mongoose.connect('mongodb+srv://ymfloresl:lFS9kqCYGmndNqUr@cluster0.cuhitye.mongodb.net/?retryWrites=true&w=majority') 
.then(()=> console.log('Conectando a Atlas base de datos'))
.catch((error)=>console.error(error));
