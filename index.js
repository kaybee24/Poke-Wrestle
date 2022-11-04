import express from 'express';
import 'dotenv/config';
import PokeRouter from './src/routes.js';
import cors from 'cors';

const server = express()
const port = process.env.PORT || 3000;

server.use(cors())
server.use(express.json())
server.use('/pokemon', PokeRouter)

server.get('/', (req, res) => res.json("Main page"))
server.listen(port, () => console.log(`server listens on http://localhost:${port}`))

