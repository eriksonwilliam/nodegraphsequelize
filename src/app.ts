import * as express from 'express'

class App{

    public express: express.Application

    constructor(){
        this.express = express()
        this.middleware()
    }

    private middleware(): void{
        this.express.use('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.send({
                hello: "vai muleque"
            })
        }) 
    }
}

export default new App().express