import React from 'react';
import './Sketches.css';
import ImageSorter from '../Image-sorter/Image-sorter'

class Sketches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageSorter currentDisplayType="Sketch"></ImageSorter>
    )
  }
}

export default Sketches;
