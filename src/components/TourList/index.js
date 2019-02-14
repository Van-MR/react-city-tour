import React from 'react'
import './TourList.scss'
import Tour from '../Tour/Tour'

import {tourData} from '../../tourData'

class TourList extends React.Component {
  constructor() {
    super()
    this.state = {
      tours:tourData
    }
  }


  handleClick = id => {
    const sortdatas = this.state.tours.filter(item => item.id !== id);
    this.setState({
      tours: sortdatas
    });
  };


  render () {
      const datas = this.state.tours.map(tour => <Tour key={tour.id} data={tour} handleClick={() => this.handleClick(tour.id)} />)
      console.log(datas);
      return (
        <section className="todolist">
            {datas}
        </section>
      )
  }
}

export default TourList;
