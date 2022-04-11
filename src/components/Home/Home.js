import React from 'react';
import './Home.css';
import ImageSorter from '../Image-sorter/Image-sorter';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageSorter currentDisplayType="Mixed"></ImageSorter>
    )
  }
}

export default Home;
