const path = require('path')
const express = require('express')
const morgan = require('morgan')
const PORT = process.env.PORT || 8080
const app = express()

module.exports = app

app.use(express.static(path.join(__dirname, '/')))


 app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})


app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`))



