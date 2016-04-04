import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Col, Panel, Row } from 'react-bootstrap';
import Avatar from 'react-avatar';
import { styles } from './styles.scss';

export class Planet extends Component {
  static propTypes = {
    planet: PropTypes.object.isRequired
  };

  render() {
    const { 
      planet
    } = this.props;

    let id = planet.url.split("/")[5];
    
    return (
      <Panel className={`${styles}`}>
      <Row>
        <Col xs={12} md={12} sm={12} lg={3}>
          <div className="avatar-wrapper">
            <Avatar className="avatar"  color="#000000" round={ true } name={ planet.name } />
          </div>  
        </Col>
        <Col xs={12} md={12} sm={12} lg={9}>

          <Row>
            <Col xs={12} md={12} sm={12} lg={3}>
              Name
            </Col>
            <Col xs={12} md={12} sm={12} lg={9}>
              { planet.name } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={3}>
              Diameter
            </Col>
            <Col xs={12} md={12} sm={12} lg={9}>
              { planet.diameter } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={3}>
              Climate
            </Col>
            <Col xs={12} md={12} sm={12} lg={9}>
              { planet.climate } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={3}>
              Gravity
            </Col>
            <Col xs={12} md={12} sm={12} lg={9}>
              { planet.gravity } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={3}>
              Terrain
            </Col>
            <Col xs={12} md={12} sm={12} lg={9}>
              { planet.terrain } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={3}>
              Population
            </Col>
            <Col xs={12} md={12} sm={12} lg={9}>
              { planet.population } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={12}>
              <Link className="pull-right" to={`planets/${id}/`}>See details</Link>
            </Col>
          </Row>
        </Col>
      </Row>
        
      </Panel>
    );
  };
}
