const express = require('express')
const ctrl = require('./controller.js')

const app = express()

app.use(express.json())

app.get('/api/items', ctrl.getItems)
app.post('/api/items', ctrl.addItems)
app.put('/api/items/:cartId', ctrl.updateQuanity)

const port = 4000
app.listen(port, () => console.log(`On port ${port}`))

