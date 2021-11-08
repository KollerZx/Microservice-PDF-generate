import express, { urlencoded } from 'express'
import { routes } from './routes'
import cors from 'cors'
class App {
    public app: express.Application
    constructor(){
        this.app = express()
        this.middlewares()
        this.routes()
        
    }

    private middlewares(){
        this.app.use(express.json())
        this.app.use(cors())
    }
    private routes(){
        this.app.use(routes)
    }
}

export default new App().app