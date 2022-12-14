
import './App.css';
import React, { Component } from 'react'
import NavBar from './Component/NavBar';
import News from './Component/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
constructor(){
  super()
  this.state={
    backgroundColor:'#f1e4e4',
    color:'black',
    text:'Enable Dark Mode',
    body:document.body.style.backgroundColor='white'
}
  
}
handleModeClick=()=>{
  if(this.state.backgroundColor==='#f1e4e4'&& document.body.style.backgroundColor==='white'){
    this.setState({
      backgroundColor:'#a44c4c',
      color:'white'
    })
    this.setState({text:'Disable Dark Mode'})
    this.setState({body:document.body.style.backgroundColor='#5b2222'})
    
  }
  else{
    this.setState({
      backgroundColor:'#f1e4e4',
      color:'black',
    })
    this.setState({text:'Enable Dark Mode'})
    this.setState({body:document.body.style.backgroundColor='white'})
  }
  
}
state={
progress:0
}
setProgress=(progress)=>{
this.setState({progress:progress})
}
  
  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar mode={this.handleModeClick} dark={this.state.backgroundColor} text={this.state.color} writeMode={this.state.text}/> 
        <LoadingBar
        color='#f11946'
        height={'3px'}
        
        progress={this.state.progress}
        
      />  
      <Routes>
      <Route exact path='/' element={<News progress={this.setProgress} pagesize={6} country='in' category='general' text={this.state.color } dark={this.state.backgroundColor}/>}></Route>
      <Route exact path='/general' element={<News progress={this.setProgress}  key="general" pagesize={6} country='in' category='general' text={this.state.color} dark={this.state.backgroundColor}/>}></Route>
      <Route exact path='/business' element={<News progress={this.setProgress}  key="business"pagesize={6} country='in' category='business' text={this.state.color} dark={this.state.backgroundColor}/>}></Route>
      <Route exact path='/entertainment' element={<News progress={this.setProgress}  key="entertainment"pagesize={6} country='in' category='entertainment' text={this.state.color} dark={this.state.backgroundColor}/>}></Route>
      <Route exact path='/health' element={<News progress={this.setProgress}  key="health"pagesize={6} country='in' category='health' text={this.state.color} dark={this.state.backgroundColor}/>}></Route>
      <Route exact path='/science' element={<News progress={this.setProgress}  key="science"pagesize={6} country='in' category='science' text={this.state.color} dark={this.state.backgroundColor}/>}></Route>
      <Route exact path='/sports' element={<News progress={this.setProgress}  key="sports"pagesize={6} country='in' category='sports' text={this.state.color} dark={this.state.backgroundColor}/>}></Route>
      <Route exact path='/technology' element={<News progress={this.setProgress}  key="technology"pagesize={6} country='in' category='technology' text={this.state.color} dark={this.state.backgroundColor}/>}></Route>
    </Routes>
  </BrowserRouter>
      </div>
    )
  }
}
