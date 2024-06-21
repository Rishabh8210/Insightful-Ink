const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000;
app.use(bodyParser.json());

let blogs = []
app.get('/blogs', (req, res) => {
    if(blogs.length > 0){
        return res.status(200).send(blogs)
    }else{
        return res.status(200).send("No blogs found")
    }
})

app.post('/blogs', (req, res) => {
    console.log(req.body)
    const {id, title, description, authors} = req.body;
    const blogData = {
        id : id,
        title: title,
        description: description,
        authors: authors
    }
    blogs.push(blogData);
    return res.status(200).send("Blogs added successfully");
})

app.put("/blogs/:id", (req, res) => {
    const id = req.params.id;
    const {title, description, authors} = req.body;
    const search = blogs.filter((data) => data.id == id)
    if(search.length == 1){
        console.log(search)
        search[0].title = title;
        search[0].description = description
        search[0].authors = authors
        return res.status(200).send("Blog successfully updated, you can check now")
    }else{
        return res.status(200).send("No result found, please enter valid blog-id")
    }
})

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    const search = blogs.filter((data) => data.id != id)
    if(search.length != blogs.length){
        blogs = search;
        res.status(200).send(`Blog with id ${id} is successfully deleted`);
    }else{
        return res.status(200).send(`No blog found with id ${id}`)
    }
})
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})