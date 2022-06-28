import {Request, Response} from 'express'
import { createMenuObjects } from '../helpers/createMenuObjects'
import { Pet } from '../models/pet'

export const home = (req:Request,res:Response) =>{

    let list = Pet.getAll()
    res.render('pages/pages',{
        menu:createMenuObjects('all'),
        banner: {
            title:'Todos os pets',
            background: 'allanimals.jpg',
        },
        list
    })
}

export const dogs = (req:Request,res:Response) =>{
    let list = Pet.getFromType('dog')
    res.render('pages/pages',{
        menu:createMenuObjects('dog'),
        banner: {
            title:'Todos os cachorros',
            background: 'banner_dog.jpg',
        },
        list
        
    })
}

export const cats = (req:Request,res:Response) =>{
    let list = Pet.getFromType('cat')
    res.render('pages/pages',{
        menu:createMenuObjects('cat'),
        banner: {
            title:'Todos os gatos',
            background: 'banner_cat.jpg',
        },
        list
    })
}

export const fishes = (req:Request,res:Response) =>{
    let list = Pet.getFromType('fish')
    res.render('pages/pages',{
        menu:createMenuObjects('fish'),
        banner: {
            title:'Todos os peixes',
            background: 'banner_fish.jpg',
        },
        list
    })
}