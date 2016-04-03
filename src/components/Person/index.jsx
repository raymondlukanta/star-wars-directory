import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, Col, Image, ListGroupItem, Row } from 'react-bootstrap';
import Avatar from 'react-avatar';

import { styles } from './styles.scss';

export class Person extends Component {
  render() {
    const { 
      person
    } = this.props;

    let id = person.url.split("/")[5];
    
    return (
      <ListGroupItem className={`${styles}`}>
        <Row>
          <Col xs={12} md={12} sm={12} lg={3}>
            <div className="avatar-wrapper">
              <Avatar className="avatar" color="#000000" round={ true } name={ person.name } />
            </div>
          </Col>
          <Col xs={12} md={12} sm={12} lg={9}>
            <Row>
              <Col xs={12} md={12} sm={12} lg={3}>
                Name
              </Col>
              <Col xs={12} md={12} sm={12} lg={6}>
                { person.name } 
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} sm={12} lg={3}>
                Height
              </Col>
              <Col xs={12} md={12} sm={12} lg={9}>
                { person.height } 
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} sm={12} lg={3}>
                Mass
              </Col>
              <Col xs={12} md={12} sm={12} lg={9}>
                { person.mass } 
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} sm={12} lg={3}>
                Hair Color
              </Col>
              <Col xs={12} md={12} sm={12} lg={9}>
                { person.hair_color } 
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} sm={12} lg={3}>
                Skin Color
              </Col>
              <Col xs={12} md={12} sm={12} lg={9}>
                { person.skin_color } 
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} sm={12} lg={3}>
                Eye Color
              </Col>
              <Col xs={12} md={12} sm={12} lg={9}>
                { person.eye_color } 
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} sm={12} lg={12}>
                <Link className="pull-right" to={`people/${id}/`}>See details</Link>
              </Col>
            </Row>
          </Col>
        </Row>
        
      </ListGroupItem>
    );
  };
}
