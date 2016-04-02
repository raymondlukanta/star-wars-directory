import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Col, Image, Row } from 'react-bootstrap';
import { RowLinkParser } from 'components/RowLinkParser';
import { styles } from './styles.scss';

const episode1Img = require('./files/1.png');
const episode2Img = require('./files/2.png');
const episode3Img = require('./files/3.png');
const episode4Img = require('./files/4.png');
const episode5Img = require('./files/5.png');
const episode6Img = require('./files/6.png');
const episode7Img = require('./files/7.png');

export class FilmIcon extends Component {
  static propTypes = {
    link: PropTypes.string
  };

  render() {
    const { 
      link
    } = this.props;

    let id = link.split("/")[5];

    let icon = this._decideIcon(id);
    let child = (<Image src={ icon } rounded className="film-icon"/>)
    return (
      <div className={`${styles}`}>
        <RowLinkParser link={ link } child={ child }/>
      </div>
    );
  };

  _decideIcon(id) {
    switch(id) {
      case "1": return episode1Img;
      case "2": return episode2Img;
      case "3": return episode3Img;
      case "4": return episode4Img;
      case "5": return episode5Img;
      case "6": return episode6Img;
      case "7": return episode7Img;
    }
  }
}
