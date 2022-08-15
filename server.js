const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use (express.static(path.join(__dirname, 'public')))

app.listen(PORT,()=>{
    console.log('server listening ' + PORT);
})

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views','./index.html'))
})