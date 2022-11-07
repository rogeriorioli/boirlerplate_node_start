import {Request, Response} from 'express'


export default class UserController {
 
  public async generateUserToken(req : Request, res : Response): Promise<void>  {
      const {email , telefone} = req.body
      
  }
}

