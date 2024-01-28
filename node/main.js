const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile('index.html');
})

app.post('/', (req, res) => {
    console.log(req.body.phone)
});

app.listen(8000, ()=>{
    console.log('server running on port 8000')
})
