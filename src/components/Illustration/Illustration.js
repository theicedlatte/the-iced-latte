import React from 'react';
import './Illustration.css';
import ImageSorter from '../Image-sorter/Image-sorter';


class Illustration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageSorter currentDisplayType="Illustration"></ImageSorter>
    )
  }
}

export default Illustration;
