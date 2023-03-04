import React from "react";
import { Component } from "react";
import "./search-box.css"
class Search extends Component{
    
    render(){
    return(
        <form class="nosubmit">
        <input type='search' className='srch' placeholder={this.props.plholder} onChange={this.props.onchangeHandler}></input>
    </form>
    )
    }
}
export default Search;