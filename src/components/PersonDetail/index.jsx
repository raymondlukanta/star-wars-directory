import React, { Component, PropTypes } from 'react';
import { Col, Panel, Row } from 'react-bootstrap';
import { RowLinkParser } from 'components/RowLinkParser';
import { FilmIcon } from 'components/FilmIcon';
import { VehicleIcon } from 'components/VehicleIcon';
import { StarshipIcon } from 'components/StarshipIcon';
import Avatar from 'react-avatar';
import { styles } from './styles.scss';

export class PersonDetail extends Component {
  static propTypes = {
    person: PropTypes.object.isRequired
  };

  render() {
    const { 
      person
    } = this.props;

    let id = person.url.split("/")[5];
    
    return (
      <Panel className={`${styles}`}>
        <div className="avatar-wrapper">
          <Avatar className="avatar"  color="#000000" round={ true } name={ person.name } />
        </div>  
        <Row>
          <Col xs={12} md={12} sm={12} lg={3}>
            Name
          </Col>
          <Col xs={12} md={12} sm={12} lg={9}>
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
          <Col xs={12} md={12} sm={12} lg={3}>
            Birth Year
          </Col>
          <Col xs={12} md={12} sm={12} lg={9}>
            { person.birth_year } 
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={3}>
            Gender
          </Col>
          <Col xs={12} md={12} sm={12} lg={9}>
            { person.gender } 
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={3}>
            Homeworld
          </Col>
          <Col xs={12} md={12} sm={12} lg={9}>
            <RowLinkParser link={ person.homeworld } /> 
          </Col>
        </Row>
        { person.species.length > 0 &&
          <Row>
            <Col xs={12} md={12} sm={12} lg={3}>
              Species
            </Col>
            <Col xs={12} md={12} sm={12} lg={9}>
              { 
                person.species.map((species) => {
                  return (<RowLinkParser key= { species } link={ species } />)
                })
              }
            </Col>
          </Row>
        }
        { person.films.length > 0 &&
          <Row>
            <Col xs={12} md={12} sm={12} lg={12}>
              <h4>Films</h4>
            </Col>
            <Col xs={12} md={12} sm={12} lg={12} className="flex-container-wrapper">
              { 
                person.films.map((film) => {
                  return <FilmIcon key={ film } link={ film } />
                })
              }
            </Col>
          </Row>
        }
        { person.vehicles.length > 0 &&
          <Row>
            <Col xs={12} md={12} sm={12} lg={12}>
              <h4>Vehicles</h4>
            </Col>
            <Col xs={12} md={12} sm={12} lg={12} className="flex-container-wrapper">
              { 
                person.vehicles.map((vehicle) => {
                  return <VehicleIcon key={ vehicle } link={ vehicle } />
                })
              } 
            </Col>
          </Row>
        }
        { person.starships.length > 0 &&
          <Row>
            <Col xs={12} md={12} sm={12} lg={12}>
              <h4>Starships</h4>
            </Col>
            <Col xs={12} md={12} sm={12} lg={12} className="flex-container-wrapper">
              { 
                person.starships.map((starship) => {
                  return <StarshipIcon key={ starship } link={ starship } />
                })
              }
            </Col>
          </Row> 
        }
      </Panel>
    );
  };
}
