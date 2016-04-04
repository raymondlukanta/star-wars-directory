import React, { Component, PropTypes } from 'react';
import { Col, Image, Panel, Row } from 'react-bootstrap';
import { RowLinkParser } from 'components/RowLinkParser';
import { PlanetIcon } from 'components/PlanetIcon';
import { PersonIcon } from 'components/PersonIcon';
import { VehicleIcon } from 'components/VehicleIcon';
import { StarshipIcon } from 'components/StarshipIcon';
import Avatar from 'react-avatar';
import { styles } from './styles.scss';


const episode1Img = require('components/FilmIcon/files/1.png');
const episode2Img = require('components/FilmIcon/files/2.png');
const episode3Img = require('components/FilmIcon/files/3.png');
const episode4Img = require('components/FilmIcon/files/4.png');
const episode5Img = require('components/FilmIcon/files/5.png');
const episode6Img = require('components/FilmIcon/files/6.png');
const episode7Img = require('components/FilmIcon/files/7.png');

export class FilmDetail extends Component {
  static propTypes = {
    film: PropTypes.object.isRequired
  };

  render() {
    const { 
      film
    } = this.props;

    let id = film.url.split("/")[5];
    let icon = this._decideIcon(id);
    
    return (
      <Panel className={`${styles}`}>
        <div className="avatar-wrapper">
          <Image src={ icon } rounded className="film-icon"/>          
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

  _decideIcon(id) {
    switch(id) {
      case "1": return episode4Img;
      case "2": return episode5Img;
      case "3": return episode6Img;
      case "4": return episode1Img;
      case "5": return episode2Img;
      case "6": return episode3Img;
      case "7": return episode7Img;
    }
  }
}
