const Blog = {}

Blog.list = (req, res) => {
    res.render(
        'blog/home', 
        {
            title: 'Blog', 
            subtitle: 'Liste des articles.',
            description: 'Blog de Jérémy Deurvillier, Développeur Web et Web Mobile.'
        }
    )
}

export default Blog