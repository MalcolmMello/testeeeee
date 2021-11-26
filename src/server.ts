import express, { response } from 'express';

// @types/express
const app = express();
/*
GET      => Buscar uma informação
POST     => Inserir (criar) uma informação
PUT      => Alterar uma informação
DELETE   => Remover umn dado
PATCH    => Alterar uma informação específica
*/

app.get("/test", (request, response) => {
// Request => Entrando
//Response => Saindo
return response.send("Olá NLW")
})

app.post("/test-post", (request, response) => {
    return response.send("Olá NLW método POST")
})

app.listen(3000, () => console.log("Server is running"))