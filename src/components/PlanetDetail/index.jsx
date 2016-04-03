import React, { Component, PropTypes } from 'react';
import { Col, Panel, Row } from 'react-bootstrap';
import { FilmIcon } from 'components/FilmIcon';
import { PersonIcon } from 'components/PersonIcon';
import Avatar from 'react-avatar';
import { styles } from './styles.scss';

export class PlanetDetail extends Component {
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
        <div className="avatar-wrapper">
          <Avatar className="avatar"  color="#000000" round={ true } name={ planet.name } />
        </div>  
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
            Rotation Period
          </Col>
          <Col xs={12} md={12} sm={12} lg={9}>
            { planet.rotation_period } 
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={3}>
            Orbital Period
          </Col>
          <Col xs={12} md={12} sm={12} lg={9}>
            { planet.orbital_period } 
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
            Surface Water
          </Col>
          <Col xs={12} md={12} sm={12} lg={9}>
            { planet.surface_water } 
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
        
        { planet.residents.length > 0 &&
          <Row>
            <Col xs={12} md={12} sm={12} lg={12}>
              <h4>Residents</h4>
            </Col>
            <Col xs={12} md={12} sm={12} lg={12} className="flex-container-wrapper">
              { 
                planet.residents.map((person) => {
                  return <PersonIcon key={ person } link={ person } />
                })
              }
            </Col>
          </Row>
        }
        { planet.films.length > 0 &&
          <Row>
            <Col xs={12} md={12} sm={12} lg={12}>
              <h4>Films</h4>
            </Col>
            <Col xs={12} md={12} sm={12} lg={12} className="flex-container-wrapper">
              { 
                planet.films.map((film) => {
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
