const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const users = [
    {id:'test01', pw:'12345'},
    {id:'test02', pw:'12345'},
    {id:'test03', pw:'12345'},
    {id:'test04', pw:'12345'},
    {id:'test05', pw:'12345'}
]

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use (express.static(path.join(__dirname, 'public')));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views','./index.html'))
})
app.get('/sub01', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views','./sub01.html'))
})
app.get('/sub02', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views','./sub02.html'))
})
app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views','./login.html'))
})

app.post('/login', (req,res)=>{
    
    const user = users.find( user => user.id == req.body.id );
    console.log('test', req.body.id);
   
    if( user ) 
        res.send( {success : true, message: `${user.id}님 안녕하세요.`});
    else   
        res.send( {success : false, message: `id 또는 pw를 확인하세요.`});
})

app.get('/*', (req,res)=>{
    console.log(req.url);
    res.sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(PORT,()=>{
    console.log('server listening ' + PORT);
})