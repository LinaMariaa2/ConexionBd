import { Router } from "express";

const router = Router()

router.get('/', (req, res) =>{
    res.send("hola,mundo")
});

router.get('/blog', (req, res) =>{
    res.send("pag blog")
});

export default router 