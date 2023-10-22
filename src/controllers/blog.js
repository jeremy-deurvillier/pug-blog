import express from 'express'

const router = express.Router()

router.get('/', (req, res) => res.render('blog/home', {title: 'Blog'}))

export default router