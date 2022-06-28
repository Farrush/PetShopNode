import {Request, Response} from 'express'
import {Pet} from '../models/pet'
import { createMenuObjects } from '../helpers/createMenuObjects'

export const search = (req:Request,res:Response) =>{

    let query: string = req.query.q as string

    let list = Pet.getFromName(query)
    res.render('pages/pages',{
        menu:createMenuObjects(''),
        list,
        query
    })
}