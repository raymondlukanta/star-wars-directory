import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Col, Image, Row } from 'react-bootstrap';
import { RowLinkParser } from 'components/RowLinkParser';
import { styles } from './styles.scss';
import Avatar from 'react-avatar';

export class StarshipIcon extends Component {
  static propTypes = {
    link: PropTypes.string
  };

  render() {
    const { 
      link
    } = this.props;

    let id = link.split("/")[5];

    let child = (<Avatar className="avatar"  color="#000000" size={70} round={ false }  name={ id } />);
    return (
      <div className={`${styles}`}>
        <RowLinkParser link={ link } child={ child }/>
      </div>
    );
  };
}
