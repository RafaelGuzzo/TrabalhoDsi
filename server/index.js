"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pg = require('pg');

function getClient() {
  return new pg.Client({
    host:'localhost',
    port:5432,
    database:'cadaAtleta',
    user: 'postgres',
    password:'123',
  });
}


const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());
app.use(express.static('.'));

app.get('/api/buscaTodos', (req, res) => {

  const client = getClient();

  client.connect()

  client.query("SELECT * FROM atleta", (err, result) => {
    if(err){
      res.json(err)
      return next(err)
    }else{
      res.status(200).json(result.rows)
    }
    client.end();
  })
})

app.get("/api/alteta/:id", (req, res, next) => {
  let id = parseInt(req.params.id);

  let client = getClient();

  client.connect();

  client.query("DELETE FROM atleta WHERE id = $1", [id], (err, item) => {
    if (err) {
      res.json(err);
      return next(err);
    } else {
      res.status(200).json("excluído");
    }
  })
})



app.post('/api/cadastrarAtleta', (req, res, next) =>{
  let id = req.body.id
  let nome = req.body.nome
  let idade = req.body.idade
  let associoacao = req.body.associoacao
  let graduacao = req.body.graduacao

  let client = getClient();

  client.connect();

  client.query("INSERT INTO atleta(id, nome, idade, associoacao, graduacao) VALUES($1, $2, $3, $4, $5)",
                                                [id,nome,idade,associoacao,graduacao], (err, item) => {
    if (err) {
      res.json(err);
      return next(err);
    } else {
      res.redirect("http://localhost:4200/cadastra")
    }

    client.end();
  })

})

app.post('/api/alteraAtleta', (req, res, next) =>{
  let id = req.body.id
  let nome = req.body.nome
  let idade = req.body.idade
  let associoacao = req.body.associoacao
  let graduacao = req.body.graduacao

  let client = getClient();

  client.connect();

  client.query("UPDATE atleta SET  nome = $2, idade = $3, associoacao = $4, graduacao = $5 WHERE id = $1",
                                                [id,nome,idade,associoacao,graduacao], (err, item) => {
    if (err) {
      res.json(err);
      return next(err);
    } else {
      res.redirect("http://localhost:4200/lista")
    }

    client.end();
  })

})

app.listen(3000, function(){
  console.log('Servidor iniciado.')
})
