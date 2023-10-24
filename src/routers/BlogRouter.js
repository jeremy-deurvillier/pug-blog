import express from 'express'
import Blog from '../controllers/BlogController.js'

const router = express.Router()

router.get('/', Blog.list)
router.get('/posts/:slug', Blog.single)

export default router