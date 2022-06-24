import express, {Request, Response} from "express"
import dotenv from "dotenv"
import mustache from "mustache-express"

import path from 'path'

import mainRoutes from './routes/index'

//dotenv para a nossa porta
dotenv.config()

//configuração do servidor
const server = express()

//configuração do mustache
server.set('view engine','mustache')
server.engine('mustache',mustache())

//diretório que colocamos os arquivos do mustache
server.set('views',path.join(__dirname,'views'))

//definir diretório public
server.use(express.static(path.join(__dirname,'../public')))


server.use(mainRoutes)
//criando a página não encontrada
server.use((req, res)=>{
    res.send("<h1>Página não encontrada</h1>")
})


//habilitando o servidor
server.listen(process.env.PORT)