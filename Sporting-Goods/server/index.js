const express = require('express')
const ctrl = require('./controller.js')

const app = express()

app.use(express.json())

app.get('/api/items', ctrl.getItems)
app.post('/api/items', ctrl.addItems)
app.put('/api/items/:cartId', ctrl.updateQuanity)
app.delete('/api/items/:cartId',ctrl.deleteItem)
app.get('/api/cart', ctrl.getCart)

const port = 4000
app.listen(port, () => console.log(`On port ${port}`))

