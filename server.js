const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.use(express.static(path.resolve(__dirname, 'dist')))