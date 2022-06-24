import { Router } from "express"

//importando os controllers
import * as pageController from '../controllers/pageController'
import * as searchController from '../controllers/searchController'

//criando variável para rota
const router = Router()

//criando a rota home
router.get('/',pageController.home)

router.get('/dogs',pageController.dogs)

router.get('/cats',pageController.cats)

router.get('/fishes',pageController.fishes)

router.get('/search',searchController.search)


export default router