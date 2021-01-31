const items = [{
    itemId: 0,
    name: 'soccer ball',
    price: 30
}]

let cartId = 0

const cart = []

module.exports = {
    getItems: (req, res) => {
        res.status(200).send(items)
    },
    addItems: (req, res) => {
        const {name, price, itemId, quanity} = req.body
        const selectedItem = {cartId, name, price, itemId, quanity}
        cartId++
        cart.push(selectedItem)
        res.status(200).send(cart)
    },
    updateQuanity: (req,res) => {
        const {cartId} = req.params
        const {quanityToChange} = req.body
        const index = cart.findIndex(cart => cart.cartId === +req.params.cartId)
        console.log(cart[index])
        if(quanityToChange === 1){
            cart[index].quanity += 1
        } else {
            if(cart[index].quanity > 0){
                cart[index].quanity -= 1
            }
        }
        res.status(200).send(cart)
    }
}