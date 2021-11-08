import axios from 'axios'
import { Request, Response } from 'express'
import pdf, { CreateOptions } from 'html-pdf'

class GeneratePDF{

    public static async handle(req: Request, res: Response){
        const { url } = req.body
        
        try {
            axios.get(url).then(response => {
                const html = response.data
                const options: CreateOptions = {
                    format: 'A4'
                }
                pdf.create(html, options).toFile('report.pdf', (err, data) =>{
                    if(err) throw err
                    
                    res.contentType('application/pdf')
                    return res.send(data)
                })
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}
export { GeneratePDF }