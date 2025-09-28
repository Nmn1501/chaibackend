require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/linkedin', (req, res) => {
  res.send('naman 1501 World!')
})
app.get('/login', (req, res) => {
  res.send('Please login at chai or code')
})
app.get('/youtube', (req,res) => {
res.send("Naman")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})