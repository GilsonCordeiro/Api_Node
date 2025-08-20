import express from 'express'; 
import { PrismaClient } from './generated/prisma'

const prisma = new PrismaClient()

const app = express();
app.use(express.json())

const users = []

app.post('/users', async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    res.status(201).json(req.body)
})

app.get('/users', (req, res) => {
    res.status(200).json(users )
})






app.listen(3000)

//Criação do banco de dados Mongo DB
//site: https://cloud.mongodb.com/v2/68a5d745bc7d6844d9ad98c5#/overview?automateSecurity=true
//Usuário db: gilsilvacord2021
//Senha: nDiPPhrCwZ6LS8r0