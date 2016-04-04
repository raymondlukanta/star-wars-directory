import React, { Component, PropTypes } from 'react';
import { Col, Panel, Row } from 'react-bootstrap';
import { FilmIcon } from 'components/FilmIcon';
import { RowLinkParser } from 'components/RowLinkParser';
import { PersonIcon } from 'components/PersonIcon';
import Avatar from 'react-avatar';
import { styles } from './styles.scss';

export class SpeciesDetail extends Component {
  static propTypes = {
    species: PropTypes.object.isRequired
  };

  render() {
    const { 
      species
    } = this.props;

    let id = species.url.split("/")[5];
    
    return (
      <Panel className={`${styles}`}>
        <div className="avatar-wrapper">
          <Avatar className="avatar"  color="#000000" round={ true } name={ species.name } />
        </div>  
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
            Skin Colors
          </Col>
          <Col xs={12} md={12} sm={12} lg={7}>
            { species.skin_colors } 
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={5}>
            Hair Colors
          </Col>
          <Col xs={12} md={12} sm={12} lg={7}>
            { species.hair_colors } 
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={5}>
            Eye Colors
          </Col>
          <Col xs={12} md={12} sm={12} lg={7}>
            { species.eye_colors } 
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
            Homeworld
          </Col>
          <Col xs={12} md={12} sm={12} lg={7}>
            <RowLinkParser link={ species.homeworld } />
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
        
        { species.people.length > 0 &&
          <Row>
            <Col xs={12} md={12} sm={12} lg={12}>
              <h4>People</h4>
            </Col>
            <Col xs={12} md={12} sm={12} lg={12} className="flex-container-wrapper">
              { 
                species.people.map((person) => {
                  return <PersonIcon key={ person } link={ person } />
                })
              }
            </Col>
          </Row>
        }
        { species.films.length > 0 &&
          <Row>
            <Col xs={12} md={12} sm={12} lg={12}>
              <h4>Films</h4>
            </Col>
            <Col xs={12} md={12} sm={12} lg={12} className="flex-container-wrapper">
              { 
                species.films.map((film) => {
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
