const path = require('path');
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const mailerRoute = require('./routes/mailerRoute')

const PORT = process.env.PORT || 3001;



const app = express()
app.use(cors())
app.use(express.json())
app.use('/', mailerRoute)

// serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))
}

// serve index.html for any unknown paths:
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
