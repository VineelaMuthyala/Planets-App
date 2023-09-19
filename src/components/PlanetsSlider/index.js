import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,

    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="planets-container" data-testid="planets">
      <h1 className="main-heading">Planets</h1>

      <Slider {...settings}>
        {planetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} planetDetails={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
