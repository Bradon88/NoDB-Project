import axios from 'axios'
import React, {Component} from 'react'
import CartItems from './CartItems'


class Cart extends Component{
    
        

    
 
  
    
    
    render(){
             const mappedItems = this.props.cart.map((element, index) => {
            return <div>
                <CartItems cartItem={element} deleteItems={this.props.deleteItems} updateItems={this.props.updateItems}/>


                </div>
             })
             
       
       console.log(this.props)
            return( 
            <div className='cart-box'>
             <p className='cart-title'>Cart</p>
            
            {mappedItems}
                <div className='total'>
                    Total: ${this.props.total}
                </div>
            
            </div>

        
            )
           
        }
            
                
    }


export default Cart