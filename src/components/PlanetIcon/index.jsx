import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Col, Image, Row } from 'react-bootstrap';
import { RowLinkParser } from 'components/RowLinkParser';
import { styles } from './styles.scss';
import Avatar from 'react-avatar';

export class PlanetIcon extends Component {
  static propTypes = {
    link: PropTypes.string
  };

  render() {
    const { 
      link
    } = this.props;

    let id = link.split("/")[5];

    let child = (<Avatar className="avatar" size={70} color="#000000" round={ true } name={ id } />);
    return (
      <div className={`${styles}`}>
        <RowLinkParser link={ link } child={ child }/>
      </div>
    );
  };
}
