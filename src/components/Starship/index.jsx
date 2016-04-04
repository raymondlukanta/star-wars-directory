import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Col, Panel, Row } from 'react-bootstrap';
import Avatar from 'react-avatar';
import { styles } from './styles.scss';

export class Starship extends Component {
  static propTypes = {
    starship: PropTypes.object.isRequired
  };

  render() {
    const { 
      starship
    } = this.props;

    let id = starship.url.split("/")[5];
    
    return (
      <Panel className={`${styles}`}>
      <Row>
        <Col xs={12} md={12} sm={12} lg={3}>
          <div className="avatar-wrapper">
            <Avatar className="avatar"  color="#000000" round={ false } name={ starship.name } />
          </div>  
        </Col>
        <Col xs={12} md={12} sm={12} lg={9}>
          <Row>
            <Col xs={12} md={12} sm={12} lg={3}>
              Name
            </Col>
            <Col xs={12} md={12} sm={12} lg={9}>
              { starship.name } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={3}>
              Model
            </Col>
            <Col xs={12} md={12} sm={12} lg={9}>
              { starship.model } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={3}>
              Crew
            </Col>
            <Col xs={12} md={12} sm={12} lg={9}>
              { starship.crew } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={3}>
              Passengers
            </Col>
            <Col xs={12} md={12} sm={12} lg={9}>
              { starship.passengers } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={3}>
              Consumables
            </Col>
            <Col xs={12} md={12} sm={12} lg={9}>
              { starship.consumables } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={3}>
              Length
            </Col>
            <Col xs={12} md={12} sm={12} lg={9}>
              { starship.length } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={12}>
              <Link className="pull-right" to={`starships/${id}/`}>See details</Link>
            </Col>
          </Row>
        </Col>
      </Row>
        
      </Panel>
    );
  };
}
