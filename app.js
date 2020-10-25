const express = require('express')
const morgan = require('morgan')

const app = express()

app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.get('/about',(req,res) => {
    res.render('pages/about',{title:'About'})
})

app.get('/help',(req,res) => {
    res.render('pages/help',{title:'Help'})
})

app.get('/',(req,res) => {
    let post = {
        title: 'Test Title',
        body: 'Test Body',
        published: true//false 
    }

    let posts = [
        {title: 'Title One',author: 'Md. Iqram khan'},
        {title: 'Title Two',author: 'Md. Iqram khan'},
        {title: 'Title Three',author: 'Md. Iqram khan'},
        {title: 'Title Four',author: 'Md. Iqram khan'}
    ]
    res.render('pages/index',{ title: 'EJS HOME',post,posts })
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})