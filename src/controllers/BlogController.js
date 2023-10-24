const Blog = {}

Blog.posts = [
    {
        title: 'Drag and Drop',
        description: 'Implémentons un simple système de drag and drop en POO.',
        slug: 'drag-and-drop'
    },
    {
        title: 'Drag and Drop',
        description: 'Implémentons un simple système de drag and drop en POO.',
        slug: 'drag-and-drop'
    },
    {
        title: 'Drag and Drop',
        description: 'Implémentons un simple système de drag and drop en POO.',
        slug: 'drag-and-drop'
    },
    {
        title: 'Drag and Drop',
        description: 'Implémentons un simple système de drag and drop en POO.',
        slug: 'drag-and-drop'
    },
    {
        title: 'Drag and Drop',
        description: 'Implémentons un simple système de drag and drop en POO.',
        slug: 'drag-and-drop'
    }
]

Blog.list = (req, res) => {
    res.render(
        'blog/home', 
        {
            title: 'Blog', 
            subtitle: 'Liste des articles.',
            description: 'Blog de Jérémy Deurvillier, Développeur Web et Web Mobile.',
            posts: Blog.posts
        }
    )
}

Blog.single = (req, res) => {
    console.log(req.originalUrl)
    res.send('ok')
}

export default Blog