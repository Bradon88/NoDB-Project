import React, {Component} from 'react'

class CartItems extends Component {




    render(){
       return(
        <div>
            <p>{this.props.cartItem.name}</p>
            <p>{this.props.cartItem.price}</p>
            <p>{this.props.cartItem.quanity}</p>
            <button onClick={() => this.props.updateItems(this.props.cartItem, 0)}>-</button>
            <button onClick={() => this.props.deleteItems(this.props.cartItem)}>Delete</button>
            <button onClick={() => this.props.updateItems(this.props.cartItem, 1)}>+</button>
        </div>
       )}
}

export default CartItems