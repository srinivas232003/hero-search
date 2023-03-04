import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './components/card';
import Search from './components/search-box';
import Splashr from 'splashr';
import { useEffect,useState } from 'react';
import React from 'react'
const src="https://res.cloudinary.com/dcsduqstu/video/upload/v1677917440/video-marvel/splash_wiws2x.mp4"
const apikey=process.env.REACT_APP_APIKEY
const splash=(
  <div className="splash-screen">
    <div class="vid">  
      <video autoPlay muted src={src}  type={"video/mp4"} ></video>
    </div>
    <div id="overlay">
      <div className="wrapper one">
        <div className="drop-main">
            <div class="m">M</div>
            <div class="a">A</div>
            <div class="r">R</div>
            <div class="v">V</div>
            <div class="e">E</div>
            <div class="l">L</div>
        </div>
    </div>
    </div>
  </div>)

const App=()=>{
  const {width,height}=window
  const [names,setNames]=useState([]);
  const [clicked,setClicked]=useState('')
  const [searchField,setSearchField]=useState('')
  let [filter,setFilter]=useState([])
  const [start,setStart]=useState(' ')
  useEffect(()=>{
    let url=`https://gateway.marvel.com:443/v1/public/characters?apikey=${apikey}`
    fetch(url)
    .then((res)=>{return res.json()})
    .then((res)=>{
      const dt=res.data.results;
      setNames(dt);
      setFilter(dt)}
      )
      setClicked("True");
   },[])
  //  console.log(filter,names)
 const search=(e)=>{
    const srch=e.target.value.toLocaleLowerCase()
    // console.log('execute event');
    setSearchField(srch)
    setStart(srch[0])
  }
   useEffect(()=>{
    if(clicked==="True"){
      console.log(start,"new req")
      startsrch(start)
}},[start])
      const startsrch=(start)=>{
        console.log(apikey)
    let searchKey=start
    let srch=`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchKey}&limit=99&apikey=${apikey}`;
    fetch(srch)
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
      setNames(res.data.results)
    })
  }


  //  console.log("render",names)
   useEffect(()=>{
    if(clicked==="True"){
    let fltr=names.filter((el)=>{
     return el.name.toLocaleLowerCase().includes(searchField)}
     )
     setFilter(fltr)
    // setFilter(fltr);
    // console.log(filter)
    }},[searchField]
     )

    //  useEffect(()=>{ //console.log("inside startsrch");
    //   startsrch(start)},[start])
  return(
    <Splashr splash={splash} minDelay={12000}>
    <div class="App">
      <Search plholder={'Type the name'} onchangeHandler={search}/>
      <CardList characters={filter}/>
    </div>
    </Splashr>
  )
}
export default App;






















// class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       names:[],
//       searchField:"",
//     }
//     console.log("constructor",this.state);
//   }

//   search=(e)=>{
//     const srch=e.target.value.toLocaleLowerCase()
//     console.log(srch)
//     this.setState({'searchField':srch})
//   }
//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res)=>{return res.json()})
//     .then((res)=>{return this.setState({names:res})})
//     console.log("didmount",this.state);
//   }
//   render(){

    // console.log("render",this.state);
    // const filter=this.state.names.filter((el)=>{
    //   return el.name.toLocaleLowerCase().includes(this.state.searchField)
    // })
//     return(
//     //   <Splashr splash={splash} minDelay={10000}>
 
//     // <div class="App">
//     //   {/* {this.state.names.map((el)=>{
//     //     return <div key={el.id}>{el.name}</div>
//     //   })} */}
//     //   <Search plholder={'Type the name'} onchangeHandler={this.search}/>
//     //   <CardList characters={filter}/>

//     // </div>
//     // </Splashr>

//     )
//   }
// }

 