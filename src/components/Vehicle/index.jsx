import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Col, Panel, Row } from 'react-bootstrap';
import Avatar from 'react-avatar';
import { styles } from './styles.scss';

export class Vehicle extends Component {
  static propTypes = {
    vehicle: PropTypes.object.isRequired
  };

  render() {
    const { 
      vehicle
    } = this.props;

    let id = vehicle.url.split("/")[5];
    
    return (
      <Panel className={`${styles}`}>
      <Row>
        <Col xs={12} md={12} sm={12} lg={3}>
          <div className="avatar-wrapper">
            <Avatar className="avatar"  color="#000000" round={ true } name={ vehicle.name } />
          </div>  
        </Col>
        <Col xs={12} md={12} sm={12} lg={9}>
          <Row>
            <Col xs={12} md={12} sm={12} lg={5}>
              Name
            </Col>
            <Col xs={12} md={12} sm={12} lg={7}>
              { vehicle.name } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={5}>
              Model
            </Col>
            <Col xs={12} md={12} sm={12} lg={7}>
              { vehicle.model } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={5}>
              Manufacturer
            </Col>
            <Col xs={12} md={12} sm={12} lg={7}>
              { vehicle.manufacturer } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={5}>
              Length
            </Col>
            <Col xs={12} md={12} sm={12} lg={7}>
              { vehicle.length } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={5}>
              Crew
            </Col>
            <Col xs={12} md={12} sm={12} lg={7}>
              { vehicle.crew } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={5}>
              Passengers
            </Col>
            <Col xs={12} md={12} sm={12} lg={7}>
              { vehicle.passengers } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={12}>
              <Link className="pull-right" to={`vehicles/${id}/`}>See details</Link>
            </Col>
          </Row>
        </Col>
      </Row>
        
      </Panel>
    );
  };
}
