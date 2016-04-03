import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, Col, Image, ListGroupItem, Row } from 'react-bootstrap';
import Avatar from 'react-avatar';

import { styles } from './styles.scss';

const episode1Img = require('components/FilmIcon/files/1.png');
const episode2Img = require('components/FilmIcon/files/2.png');
const episode3Img = require('components/FilmIcon/files/3.png');
const episode4Img = require('components/FilmIcon/files/4.png');
const episode5Img = require('components/FilmIcon/files/5.png');
const episode6Img = require('components/FilmIcon/files/6.png');
const episode7Img = require('components/FilmIcon/files/7.png');

export class Film extends Component {
  render() {
    const { 
      film
    } = this.props;

    let id = film.url.split("/")[5];
    let icon = this._decideIcon(id);
    
    return (
      <ListGroupItem className={`${styles}`}>
        <Row>
          <Col xs={12} md={12} sm={12} lg={3}>
            <div className="avatar-wrapper">
              <Image src={ icon } rounded className="film-icon"/>
            </div>
          </Col>
          <Col xs={12} md={12} sm={12} lg={9}>
            <Row>
              <Col xs={12} md={12} sm={12} lg={3}>
                Title
              </Col>
              <Col xs={12} md={12} sm={12} lg={9}>
                { film.title } 
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} sm={12} lg={3}>
                Episode
              </Col>
              <Col xs={12} md={12} sm={12} lg={9}>
                { film.episode_id } 
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} sm={12} lg={3}>
                Director
              </Col>
              <Col xs={12} md={12} sm={12} lg={9}>
                { film.director } 
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} sm={12} lg={3}>
                Producer
              </Col>
              <Col xs={12} md={12} sm={12} lg={9}>
                { film.producer } 
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} sm={12} lg={3}>
                Release Date
              </Col>
              <Col xs={12} md={12} sm={12} lg={9}>
                { film.release_date } 
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} sm={12} lg={12}>
                <Link className="pull-right" to={`films/${id}/`}>See details</Link>
              </Col>
            </Row>
          </Col>
        </Row>
        
      </ListGroupItem>
    );
  };
  
  _decideIcon(id) {
    switch(id) {
      case "1": return episode4Img;
      case "2": return episode5Img;
      case "3": return episode6Img;
      case "4": return episode1Img;
      case "5": return episode2Img;
      case "6": return episode3Img;
      case "7": return episode7Img;
    }
  }
}
