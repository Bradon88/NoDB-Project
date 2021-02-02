import React, {Component} from 'react'
import Items from './Items'


class Display extends Component{
    constructor(){
        super()
        // this.state = 
    }

    
    render(){
        const mappedItems = this.props.itemsArr.map((element, index) => {
            return <div>
                <Items item={element} addItems={this.props.addItems}/>
            </div>
        })
            
                
        return <div className = 'display'>
                {mappedItems}
            </div> 
    }
}

export default Display