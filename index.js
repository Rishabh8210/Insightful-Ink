const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000;
app.use(bodyParser.json());

let blogs = []
app.get('/', (req, res) => {
    res.status(200).send(blogs)
})


app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})