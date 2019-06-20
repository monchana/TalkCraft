import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import './12.png'
import { Link } from 'components'

class MainCarousel extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;
    const png = require(`!raw-loader!./${12}.png`)
    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
        <Link href="/yesno-detail/1" style={{fontFamily:"Geogia", color:"black"}}>

          <img
            className="d-block w-100 h-50"
src="https://t1.daumcdn.net/cfile/tistory/262E4E4855924DBB24"
            alt="First slide"
            href="/yesno-detail/1"
           />
           </Link>

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://placehold.it/1000x400/"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Place holder image</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://placehold.it/1000x400/"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p> Place holder image </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default MainCarousel
