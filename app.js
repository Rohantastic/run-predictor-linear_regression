const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const axios = require('axios');

app.use(cors())
app.use(express.static(path.join(__dirname,"client")));
app.use(express.json())


app.get('/',async (req,res)=>{
    res.sendFile(path.join(__dirname,"client","/index.html"));
});

app.post('/post', async(req,res)=>{

    const matches = req.body.matches;

    console.log('matches->',req.body);

    const response = await axios.post('http://localhost:3000/get-value',{
        matches
    });

    console.log(response);

})

app.listen(3000,()=>{
    console.log('server running on 3000');
})