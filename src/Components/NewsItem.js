import React,{ Component } from 'react'


export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date,source } = this.props;
    return (

      <div className='my-3'>
        <div className="card">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
            <span class=" badge rounded-pill bg-warning">
              {source}
             </span>
          </div>
          <img src={!imageUrl ? "https://economictimes.indiatimes.com/thumb/msid-102741408,width-1070,height-580,imgsize-211504,overlay-economictimes/photo.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body" >
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' className="btn btn-sm btn-success">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;