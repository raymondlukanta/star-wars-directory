import React, { Component, PropTypes } from 'react';
import { Col, Panel, Row } from 'react-bootstrap';
import { FilmIcon } from 'components/FilmIcon';
import { PersonIcon } from 'components/PersonIcon';
import Avatar from 'react-avatar';
import { styles } from './styles.scss';

export class VehicleDetail extends Component {
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
        <div className="avatar-wrapper">
          <Avatar className="avatar"  color="#000000" round={ true } name={ vehicle.name } />
        </div>  
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
            Cost In Credits
          </Col>
          <Col xs={12} md={12} sm={12} lg={7}>
            { vehicle.cost_in_credits } 
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
            Max Atmosphering Speed
          </Col>
          <Col xs={12} md={12} sm={12} lg={7}>
            { vehicle.max_atmosphering_speed } 
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
          <Col xs={12} md={12} sm={12} lg={5}>
            Cargo Capacity
          </Col>
          <Col xs={12} md={12} sm={12} lg={7}>
            { vehicle.cargo_capacity } 
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={5}>
            Consumables
          </Col>
          <Col xs={12} md={12} sm={12} lg={7}>
            { vehicle.consumables } 
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={5}>
            Vehicle Class
          </Col>
          <Col xs={12} md={12} sm={12} lg={7}>
            { vehicle.vehicle_class } 
          </Col>
        </Row>
        { vehicle.pilots.length > 0 &&
          <Row>
            <Col xs={12} md={12} sm={12} lg={12}>
              <h4>Pilots</h4>
            </Col>
            <Col xs={12} md={12} sm={12} lg={12} className="flex-container-wrapper">
              { 
                vehicle.pilots.map((person) => {
                  return <PersonIcon key={ person } link={ person } />
                })
              }
            </Col>
          </Row>
        }
        { vehicle.films.length > 0 &&
          <Row>
            <Col xs={12} md={12} sm={12} lg={12}>
              <h4>Films</h4>
            </Col>
            <Col xs={12} md={12} sm={12} lg={12} className="flex-container-wrapper">
              { 
                vehicle.films.map((film) => {
                  return <FilmIcon key={ film } link={ film } />
                })
              } 
            </Col>
          </Row>
        }
      </Panel>
    );
  };
}
