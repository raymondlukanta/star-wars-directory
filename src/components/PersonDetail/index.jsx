import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Col, Image, Panel, Row } from 'react-bootstrap';
import { RowLinkParser } from 'components/RowLinkParser'
import { styles } from './styles.scss';

export class PersonDetail extends Component {
  render() {
    const { 
      person
    } = this.props;

    let id = person.url.split("/")[5];
    
    return (
      <Panel className={`${styles}`}>
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
            <RowLinkParser link={ person.homeworld }></RowLinkParser> 
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={3}>
            Films
          </Col>
          <Col xs={12} md={12} sm={12} lg={9}>
            { 
              person.films.map((film) => {
                return (<RowLinkParser key= { film } link={ film }></RowLinkParser>)
              })
            }
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={3}>
            Species
          </Col>
          <Col xs={12} md={12} sm={12} lg={9}>
            { 
              person.species.map((species) => {
                return (<RowLinkParser key= { species } link={ species }></RowLinkParser>)
              })
            }
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={3}>
            Vehicles
          </Col>
          <Col xs={12} md={12} sm={12} lg={9}>
            { 
              person.vehicles.map((vehicle) => {
                return (<RowLinkParser key= { vehicle } link={ vehicle }></RowLinkParser>)
              })
            } 
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} sm={12} lg={3}>
            Starships
          </Col>
          <Col xs={12} md={12} sm={12} lg={9}>
            { 
              person.starships.map((starship) => {
                return (<RowLinkParser key= { starship } link={ starship }></RowLinkParser>)
              })
            }
          </Col>
        </Row> 
      </Panel>
    );
  };
}
