import React from 'react'

const Items = (props) => {
    return <div>
        
        <img className='image' src={props.item.image}/>
        <button onClick={() => props.addItems(props.item)} className = 'item-button'>{props.item.name}</button>
                <p className='item-price'>${props.item.price}</p>
            
    </div>
}

export default Items