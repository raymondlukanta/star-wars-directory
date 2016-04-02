import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Col, Row } from 'react-bootstrap';

export class RowLinkParser extends Component {
  static propTypes = {
    link: PropTypes.string
  };

  render() {
    const { 
      link
    } = this.props;

    let splittedLink = link.split("/");
    let entity = splittedLink[4]
    let id = splittedLink[5]

    return (
      <Row>
        <Col xs={12} md={12} sm={12} lg={12}>
          <Link to={`${entity}/${id}`}>
            {entity} - {id}
          </Link>
        </Col>
      </Row>
    );
  };
}
