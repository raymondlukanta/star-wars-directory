import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, Col, Image, ListGroupItem, Row } from 'react-bootstrap';
import Avatar from 'react-avatar';

import { styles } from './styles.scss';

export class Film extends Component {
  render() {
    const { 
      film
    } = this.props;

    let id = film.url.split("/")[5];
    
    return (
      <ListGroupItem className={`${styles}`}>
        <Row>
          <Col xs={12} md={12} sm={12} lg={3}>
            <Avatar className="avatar" color="#000000" round={ true } name={ film.title } />
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
}
