const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use (express.static(path.join(__dirname, 'public')))

app.listen(PORT,()=>{
    console.log('server listening ' + PORT);
})

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views','./index.html'))
})
app.get('/sub01', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views','./sub01.html'))
})
app.get('/sub02', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views','./sub02.html'))
})