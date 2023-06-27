const express = require('express')
const generateCount = require('./utils/generateCount')
const generateRandomNumber = require('./utils/generateRandomNumber')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/generate-random',(req,res)=>{
    const {num1,num2}=req.query;
    res.status(200).json({ randomNumber: generateRandomNumber(Number(num1),Number(num2)) })

})

app.get('/counter',(req,res)=>{
    const {string}=req.query;
    res.status(200).json({countingObj:generateCount(string)})
})
app.post('/create-profile',(req,res)=>{
    const {fields}=req.body;
    const person = fields.reduce((acc,cur)=>{
        acc[cur]=cur;
        return acc;
        },{})

    res.status(201).json({fields:person})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})