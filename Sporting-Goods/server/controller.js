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
        image: 'https://cdn.shopify.com/s/files/1/0284/7725/9864/products/sky-10-lightweight-recreational-kayak-lime_2000x.jpg?v=1591216529'
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
        image: 'https://dks.scene7.com/is/image/GolfGalaxy/19NIKMNKLPHMNCPR2DLT_Black_White?qlt=70&wid=600&fmt=pjpeg'
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
        image: 'https://allprobicycles.com/2018/wp-content/uploads/2018/07/slash99.jpg'
    },
    {
        itemId: 8,
        name: 'Hiking Backpack',
        price: 220,
        quanity: 1,
        image: 'https://www.rei.com/media/product/141491'
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