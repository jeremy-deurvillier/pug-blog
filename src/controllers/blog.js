import express from 'express'

const router = express.Router()

router.get('/', (req, res) => res.render('blog/home', {title: 'Blog', description: 'Blog de Jérémy Deurvillier, Développeur Web et Web Mobile.'}))

export default router