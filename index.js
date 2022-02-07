require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { dbConnection } = require('./database/config');

// importar as rotas
const userRoutes = require('./routes/user');

const app = express();

// middleware 
app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
// Base de dados

dbConnection();

//rotas
app.use("/api", userRoutes);




PORT =process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`servidor rodando na porta:${PORT}`);
})