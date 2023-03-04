import { Component } from "react";
import './cardcont.styles.css'
class Card extends Component{
    render(){
        let {name,id,thumbnail,description}=this.props.monster;
        if(description===""){
            description="sorry!Description is not available";
        }
        return (
        <div className="container" key={id}>
        <img alt={`monster${name}`} src={`${thumbnail.path}.${thumbnail.extension}`}></img>
        <div class="char-name" key={id}>{name}</div>
        <div class="info">
            <p>{description}</p>
        </div>
        </div>
        )
}}
export default Card;