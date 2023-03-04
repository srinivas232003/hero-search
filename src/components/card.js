import React from "react"
import { Component } from "react"
import Card from "./cardcontainer"
import './card.styles.css'
class CardList extends Component{
render(){
    console.log(this.props.characters)
    return (
        <div className="card-ls">
            {this.props.characters.map((e)=>{ 
                // const {name,id,path,extension}=e;
                return (
                    <Card monster={e}/>
            )})}
            
     </div>
    )
    }
}
export default CardList;