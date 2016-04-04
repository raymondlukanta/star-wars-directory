import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Col, Panel, Row } from 'react-bootstrap';
import Avatar from 'react-avatar';
import { styles } from './styles.scss';

export class Species extends Component {
  static propTypes = {
    species: PropTypes.object.isRequired
  };

  render() {
    const { 
      species
    } = this.props;

    console.log("species")
    console.log(species)
    let id = species.url.split("/")[5];
    
    return (
      <Panel className={`${styles}`}>
      <Row>
        <Col xs={12} md={12} sm={12} lg={3}>
          <div className="avatar-wrapper">
            <Avatar className="avatar"  color="#000000" round={ true } name={ species.name } />
          </div>  
        </Col>
        <Col xs={12} md={12} sm={12} lg={9}>
          <Row>
            <Col xs={12} md={12} sm={12} lg={5}>
              Name
            </Col>
            <Col xs={12} md={12} sm={12} lg={7}>
              { species.name } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={5}>
              Classification
            </Col>
            <Col xs={12} md={12} sm={12} lg={7}>
              { species.classification } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={5}>
              Designation
            </Col>
            <Col xs={12} md={12} sm={12} lg={7}>
              { species.designation } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={5}>
              Average Height
            </Col>
            <Col xs={12} md={12} sm={12} lg={7}>
              { species.average_height } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={5}>
              Average Lifespan
            </Col>
            <Col xs={12} md={12} sm={12} lg={7}>
              { species.average_lifespan } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={5}>
              Language
            </Col>
            <Col xs={12} md={12} sm={12} lg={7}>
              { species.language } 
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} sm={12} lg={12}>
              <Link className="pull-right" to={`species/${id}/`}>See details</Link>
            </Col>
          </Row>
        </Col>
      </Row>
        
      </Panel>
    );
  };
}
