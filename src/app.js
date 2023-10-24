import express from 'express'
import helmet from 'helmet'
import blog from './routers/BlogRouter.js'

const app = express()
const port = process.env.PORT || 3000

// Set view options
app.set('views', './src/views') // Node server launched on parent folder
app.set('view engine', 'pug')

// Commons middlewares
app.use(helmet(
    {
        contentSecurityPolicy: {
            directives: {
                "script-src": ["'self'", "https://cdn.jsdelivr.net"],
            },
        },
    }
))
app.use(express.static('src/public'))

// Routes definition
app.use('/', blog)

// App listen
app.listen(port, () => console.log(`App started on port ${port}.`))