import { Router, Request, Response } from 'express'
import { GeneratePDF } from '../controllers/AxiosController'
import { Puppeteer } from '../controllers/PuppeterController'

const routes = Router()

routes.get('/', async (req: Request, res: Response) =>{
    return await Puppeteer.handle(req, res)
})
routes.get('/report', (req:Request, res: Response) => {
    return res.send(`<h1>Hello World<h1/>`)
})

export { routes }