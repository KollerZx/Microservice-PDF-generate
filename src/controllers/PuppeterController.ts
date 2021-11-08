import { Request, Response } from "express";
import puppeteer from "puppeteer";

class Puppeteer {

    public static async handle(req: Request, res: Response){
        const { url } = req.body
        try {
            
            const browser = await puppeteer.launch({headless:true})
            const page = await browser.newPage()
            
            await page.goto(url, {waitUntil:'networkidle0'})
            console.log('chegou aqui')
            const pdf = await page.pdf({ 
                printBackground:true,
                path:'report.pdf',
                format:'letter'})
            
            await browser.close()
            res.contentType('application/pdf')
            return res.status(200).send(pdf)
        } catch (error) {
            console.log(error)
        }
    }
}

export { Puppeteer }