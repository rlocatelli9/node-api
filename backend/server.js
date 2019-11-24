const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

//iniciando app
const app = express()
app.use(express.json()); //permitindo envio em formado JSON
app.use(cors()); //libera acesso para todos os dominios

//iniciando o DB
mongoose.connect(
  "mongodb://172.18.0.3:27017/nodeapi", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})

requireDir('./src/models')

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3000, () => {
  console.log('Server connected');
});