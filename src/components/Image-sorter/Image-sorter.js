import React from 'react';
import './Image-sorter.css';
import Image from 'react-bootstrap/Image';
import { Col, Row } from 'react-bootstrap';

class ImageSorter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mixedRender: [], illustrationRender: [], sketchRender: [] };
    this.renderSketches();
    this.renderIllustrations();
    this.renderMixed();
  }

  shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

  importAll(r) {
    let images = {};
    r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
    return images;
  }

  renderSketches() {
    let sketches = this.importAll(require.context('../../../public/Sketches', false, /\.(jpg)$/));
    Object.keys(sketches).forEach(key => {
      this.state.sketchRender.push(<Col xs={4} className="mt-5"><Image src={sketches[key]} fluid /></Col>);
    });
  }
  
  renderIllustrations() {
    let illustrations = this.importAll(require.context('../../../public/Illustrations', false, /\.(jpg)$/));
    Object.keys(illustrations).forEach(key => {
      this.state.illustrationRender.push(<Col xs={4} className="mt-5"><Image src={illustrations[key]} fluid /></Col>);
    });
  }

  renderMixed() {
    let sketches = this.importAll(require.context('../../../public/Sketches', false, /\.(jpg)$/));
    let illustrations = this.importAll(require.context('../../../public/Illustrations', false, /\.(jpg)$/));
    const mixedKeys = this.shuffle(Object.keys(sketches).concat(Object.keys(illustrations)));
    mixedKeys.forEach(key => {
      if (key.includes('sketch')) {
        this.state.mixedRender.push(<Col xs={4} className="mt-5"><Image src={sketches[key]} fluid /></Col>);
      } else if (key.includes('Illu')) {
        this.state.mixedRender.push(<Col xs={4} className="mt-5"><Image src={illustrations[key]} fluid /></Col>);
      }
    });
  }

  render() {
    if (this.props.currentDisplayType === 'Mixed') {
      return (
        <Row className="mt-5 mb-5">
          {this.state.mixedRender}
        </Row>
      )
    } else if (this.props.currentDisplayType === 'Illustration') {
      return (
        <Row className="mt-5 mb-5">
          {this.state.illustrationRender}
        </Row>
      )
    } else if (this.props.currentDisplayType === 'Sketch') {
      return (
        <Row className="mt-5 mb-5">
          {this.state.sketchRender}
        </Row>
      )
    }
  }
}

export default ImageSorter;
