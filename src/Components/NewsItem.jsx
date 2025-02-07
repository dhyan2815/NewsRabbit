import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {

    let {title, description, imageUrl, url, author, date, source} = this.props;

    return ( 
      <div>
        <div className="card h-100 my-2 mx-2" style={{width: '18rem'}}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1', left: '89%'}}>{source}</span>
          <img src={imageUrl?imageUrl:"https://www.shutterstock.com/image-vector/error-500-page-empty-symbol-260nw-1711106146.jpg"} className="card-img-top" alt="..."/>

          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}..</h5>

              <p className="card-text">{description}..</p>
              
              <p className='card-text'><small className='text-muted'>By {author ? author : "Unknown"} on {new Date(date).toGMTString()} </small></p>
              
              <a href={url} rel='noreferrer' target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
