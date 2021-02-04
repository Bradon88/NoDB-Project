const items = [
    {
        itemId: 0,
        name: 'Soccer Ball',
        price: 30,
        quanity: 1,
        image: "https://i5.walmartimages.com/asr/87fc487b-86fc-45bb-b6bc-90bdb1a24e95_1.a97559437e67f0b4933c77599d353842.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"
    },
    {
        itemId: 1,
        name: 'Fishing Pole',
        price: 120,
        quanity: 1,
        image: "https://cdni.llbean.net/is/image/wim/506681_116_41?hei=1095&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2"
    },
    {
        itemId: 2,
        name: 'Baseball Hat',
        price: 25,
        quanity: 1,
        image: 'https://images-na.ssl-images-amazon.com/images/I/414emtuJ5zL._AC_.jpg'
    },
    {
        itemId: 3,
        name: 'Kayak',
        price: 350,
        quanity: 1,
        image: 'https://media.rainpos.com/10085/1107319_primary.jpg'
    },
    {
        itemId: 4,
        name: 'Snowboard',
        price: 190,
        quanity: 1,
        image: 'https://www.burton.com/static/product/W21/10704107000145_1.png'
    },
    {
        itemId: 5,
        name: 'Football Cleats',
        price: 90,
        quanity: 1,
        image: 'http://cdn.shopify.com/s/files/1/1277/1445/products/Adidas_Adizero_5-Star_8_SK_Mid_D97642_grande.jpg?v=1556034783'
    },
    {
        itemId: 6,
        name: 'Basketball',
        price: 70,
        quanity: 1,
        image: 'https://shop.wilson.com/media/catalog/product/cache/38/image/9df78eab33525d08d6e5fb8d27136e95/c/7/c7dd204a5c8de77cfa036eb232a5e64659c7b2e1_WTB0516_Evolution_v2.jpg'
    },
    {
        itemId: 7,
        name: 'Mountain Bike',
        price: 800,
        quanity: 1,
        image: 'https://cdn.bike24.net/i/mb/0b/50/71/343923-00-d-730710.jpg'
    },
    {
        itemId: 8,
        name: 'Hiking Backpack',
        price: 220,
        quanity: 1,
        image: 'https://www.divein.com/wp-content/uploads/osprey-aether-ag-60-hiking-backpack.jpg'
    }
]

let cartId = 0

const cart = []

module.exports = {
    getItems: (req, res) => {
        res.status(200).send(items)
    },
    getCart: (resq, res) => {
        res.status(200).send(cart)
    },
    addItems: (req, res) => {
        const {name, price, itemId, quanity} = req.body
        const selectedItem = {cartId, name, price, itemId, quanity}
        cartId++
        cart.push(selectedItem)
        console.log(cart)
        res.status(200).send(cart)
    },
    updateQuanity: (req,res) => {
        const {cartId} = req.params
        const {quanityToChange} = req.body
        const index = cart.findIndex(item => item.cartId === +cartId)
       console.log(quanityToChange)
        if(quanityToChange === 1){
            cart[index].quanity += 1
        } else {
            if(cart[index].quanity > 0){
                cart[index].quanity -= 1
            }
        }
        console.log(cart)
        res.status(200).send(cart)
    },
    deleteItem: (req, res) => {
        const index = cart.findIndex(cart => cart.cartId === +req.params.cartId)
        cart.splice(index, 1)
        res.status(200).send(cart)
    }
}