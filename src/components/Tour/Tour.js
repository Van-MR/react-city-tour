import React from 'react'
import './Tour.scss'

class Tour extends React.Component {

  constructor() {
    super()
    this.state = {
      show:false
    }
    this.showInfo = this.showInfo.bind(this)
  }

  showInfo() {
      this.setState({
        show: !this.state.show
      });
    }
  render () {
      const {id,city,img,name,info} = this.props.data;
      return (
        <article className="tour">
            <div className="img-container">
                <img src={img} alt="img" />
                <span className="close-btn" onClick={this.props.handleClick}>
                    <i className="fas fa-window-close"></i>
                </span>
            </div>
            <div className="tour-info">
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>
                   <span onClick={this.showInfo}>
                     info
                     <i className="fas fa-caret-square-down"></i>
                   </span>
                </h5>
                {this.state.show && (
                  <p>{info}</p>
                )}
            </div>
        </article>
      )
  }
}

export default Tour;
