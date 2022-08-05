import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './fontfamily.css';
export class NavBar extends Component {

 
  render() {
        
    return (
        <nav className={`navbar navbar-expand-lg  sticky-top  `} style={{backgroundColor:this.props.dark}}>
        <div className="container-fluid  ">
          <Link className={`navbar-brand text-${this.props.text} font-family3 font-size-head`} to="/">NewsGiraffe</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse font-size" id="navbarSupportedContent">
            <ul className={`navbar-nav me-auto mb-2 mb-lg-0 text-${this.props.text}`} >
              <li className="nav-item ">
                <Link className={`nav-link hovereffect active text-${this.props.text} ` }aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link active hovereffect text-${this.props.text}` } to="/general">General</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link active text-${this.props.text} hovereffect` } to="/business">Business</Link></li>
              <li className="nav-item">
                <Link className={`nav-link active text-${this.props.text} hovereffect` } to="/entertainment">Entertainment</Link></li>
              <li className="nav-item">
                <Link className={`nav-link hovereffect active text-${this.props.text}` } to="/health">Health</Link></li>
              <li className="nav-item">
                <Link className={`nav-link hovereffect active text-${this.props.text}` } to="/science">Science</Link></li>
              <li className="nav-item">
                <Link className={`nav-link active hovereffect text-${this.props.text}` } to="/sports">Sports</Link></li>
              <li className="nav-item">
                <Link className={`nav-link active hovereffect text-${this.props.text}` } to="/technology">Technology</Link></li>
            </ul>
          <div className="form-check form-switch   " >
  <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.props.mode} />
  <label className={`form-check-label  text-${this.props.text}`} htmlFor="flexSwitchCheckDefault">{this.props.writeMode}</label>
</div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
