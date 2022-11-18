const express = require('express');
require('dotenv').config();
const app = express()
const port = process.env.PORT;
const entry = process.env.ENTRY;

app.use(express.static(entry));

app.get('/new', (req, res) => {
  res.send('its new and working')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})