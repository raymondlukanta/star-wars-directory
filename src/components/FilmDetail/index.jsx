import React, { Component, PropTypes } from 'react';
import { Col, Panel, Row } from 'react-bootstrap';
import { RowLinkParser } from 'components/RowLinkParser';
import { PlanetIcon } from 'components/PlanetIcon';
import { PersonIcon } from 'components/PersonIcon';
import { VehicleIcon } from 'components/VehicleIcon';
import { StarshipIcon } from 'components/StarshipIcon';
import Avatar from 'react-avatar';
import { styles } from './styles.scss';

export class FilmDetail extends Component {
  static propTypes = {
    film: PropTypes.object.isRequired
  };

  render() {
    const { 
      film
    } = this.props;

    let id = film.url.split("/")[5];
    
    return (
      <Panel className={`${styles}`}>
        <div className="avatar-wrapper">
          <Avatar className="avatar"  color="#000000" round={ true } name={ film.title } />
        </div>  
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
            Opening Crawl
          </Col>
          <Col xs={12} md={12} sm={12} lg={9}>
            { film.opening_crawl } 
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
        { film.characters.length > 0 &&
          <Row>
            <Col xs={12} md={12} sm={12} lg={12}>
              <h4>Characters</h4>
            </Col>
            <Col xs={12} md={12} sm={12} lg={12} className="flex-container-wrapper">
              { 
                film.characters.map((person) => {
                  return <PersonIcon key={ person } link={ person } />
                })
              }
            </Col>
          </Row>
        }
        { film.planets.length > 0 &&
          <Row>
            <Col xs={12} md={12} sm={12} lg={12}>
              <h4>Planets</h4>
            </Col>
            <Col xs={12} md={12} sm={12} lg={12} className="flex-container-wrapper">
              { 
                film.planets.map((planet) => {
                  return <PlanetIcon key={ planet } link={ planet } />
                })
              } 
            </Col>
          </Row>
        }
        { film.vehicles.length > 0 &&
          <Row>
            <Col xs={12} md={12} sm={12} lg={12}>
              <h4>Vehicles</h4>
            </Col>
            <Col xs={12} md={12} sm={12} lg={12} className="flex-container-wrapper">
              { 
                film.vehicles.map((vehicle) => {
                  return <VehicleIcon key={ vehicle } link={ vehicle } />
                })
              } 
            </Col>
          </Row>
        }
        { film.starships.length > 0 &&
          <Row>
            <Col xs={12} md={12} sm={12} lg={12}>
              <h4>Starships</h4>
            </Col>
            <Col xs={12} md={12} sm={12} lg={12} className="flex-container-wrapper">
              { 
                film.starships.map((starship) => {
                  return <StarshipIcon key={ starship } link={ starship } />
                })
              }
            </Col>
          </Row>
        } 
        { film.species.length > 0 &&
          <Row>
            <Col xs={12} md={12} sm={12} lg={12}>
              <h4>Species</h4>
            </Col>
            <Col xs={12} md={12} sm={12} lg={12} className="flex-container-wrapper">
              { 
                film.species.map((species) => {
                  return (<RowLinkParser key= { species } link={ species }/>)
                })
              }
            </Col>
          </Row>
        }
        
      </Panel>
    );
  };
}
