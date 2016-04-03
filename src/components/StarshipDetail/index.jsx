import React, { Component, PropTypes } from 'react';
import { Col, Panel, Row } from 'react-bootstrap';
import { FilmIcon } from 'components/FilmIcon';
import { PersonIcon } from 'components/PersonIcon';
import Avatar from 'react-avatar';
import { styles } from './styles.scss';

export class StarshipDetail extends Component {
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
        <div className="avatar-wrapper">
          <Avatar className="avatar"  color="#000000" round={ true } name={ starship.name } />
        </div>  
        <Row>
          <Col xs={12} md={12} sm={12} lg={5}>
            Name
          </Col>
          <Col xs={12} md={12} sm={12} lg={7}>
            { starship.name } 
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={5}>
            Model
          </Col>
          <Col xs={12} md={12} sm={12} lg={7}>
            { starship.model } 
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={5}>
            Manufacturer
          </Col>
          <Col xs={12} md={12} sm={12} lg={7}>
            { starship.manufacturer } 
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={5}>
            Cost In Credits
          </Col>
          <Col xs={12} md={12} sm={12} lg={7}>
            { starship.cost_in_credits } 
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={5}>
            Length
          </Col>
          <Col xs={12} md={12} sm={12} lg={7}>
            { starship.length } 
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={5}>
            Max Atmosphering Speed
          </Col>
          <Col xs={12} md={12} sm={12} lg={7}>
            { starship.max_atmosphering_speed } 
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={5}>
            Crew
          </Col>
          <Col xs={12} md={12} sm={12} lg={7}>
            { starship.crew } 
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={5}>
            Passengers
          </Col>
          <Col xs={12} md={12} sm={12} lg={7}>
            { starship.passengers } 
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={5}>
            Cargo Capacity
          </Col>
          <Col xs={12} md={12} sm={12} lg={7}>
            { starship.cargo_capacity } 
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={5}>
            Consumables
          </Col>
          <Col xs={12} md={12} sm={12} lg={7}>
            { starship.consumables } 
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={5}>
            Hyperdrive Rating
          </Col>
          <Col xs={12} md={12} sm={12} lg={7}>
            { starship.hyperdrive_rating } 
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={5}>
            MGLT
          </Col>
          <Col xs={12} md={12} sm={12} lg={7}>
            { starship.MGLT } 
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={5}>
            Starship Class
          </Col>
          <Col xs={12} md={12} sm={12} lg={7}>
            { starship.starship_class } 
          </Col>
        </Row>
        
        { starship.pilots.length > 0 &&
          <Row>
            <Col xs={12} md={12} sm={12} lg={12}>
              <h4>Pilots</h4>
            </Col>
            <Col xs={12} md={12} sm={12} lg={12} className="flex-container-wrapper">
              { 
                starship.pilots.map((person) => {
                  return <PersonIcon key={ person } link={ person } />
                })
              }
            </Col>
          </Row>
        }
        { starship.films.length > 0 &&
          <Row>
            <Col xs={12} md={12} sm={12} lg={12}>
              <h4>Films</h4>
            </Col>
            <Col xs={12} md={12} sm={12} lg={12} className="flex-container-wrapper">
              { 
                starship.films.map((film) => {
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
