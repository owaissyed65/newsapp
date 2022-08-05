import React, { Component } from 'react'


export class Newsitem extends Component {
  render() {
    let {title,description,newsUrl,linkUrl,date,author} = this.props;

    return (
    <div className="my-3 " style={{margin:'30px',backgroundColor:this.props.dark}}>
  <div className="card " style={{backgroundColor:this.props.dark}} >
  <a href={linkUrl} target='_blank' rel="noreferrer"> <img src={newsUrl}  className="card-img-top" alt="..." style={{height: "150px"}} /></a>
  <div className="card-body" >
    <h5 className={`card-title text-${this.props.text}`} >{title}...</h5>
    <p className={`card-text text-${this.props.text}`}>{description}...</p>
    <a href={linkUrl} rel="noreferrer"target="_blank"className="btn btn-sm btn-primary">Read more</a><span className="badge bg-secondary mx-3 p-1">{this.props.source?this.props.source:"Unknow Source"}</span>
    <p className={`card-text my-2 py-2 text-${this.props.text}`}><small className={`text-${this.props.text} `}>By {author?author:"Unknown"}: {new Date(date).toUTCString()?new Date(date).toUTCString():"Unknown Date"}</small></p>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
