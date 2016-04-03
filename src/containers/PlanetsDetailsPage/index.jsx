import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { TitleMetaContent, DescriptionMetaContent, KeywordsMetaContent } from 'utils/constants';

import { Col, Row } from 'react-bootstrap';
import { PlanetDetail } from 'components/PlanetDetail';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadReadPlanet } from 'actions/planets'

import { styles } from './styles.scss';

const metaData = {
  title: TitleMetaContent,
  description: DescriptionMetaContent,
  meta: {
    charset: 'utf-8',
    name: {
      keywords: KeywordsMetaContent,
    },
  },
};

function mapStateToProps(state) {
  const {
    entities: { planets }
  } = state;
  
  return {
    planets
  }
}

@connect(
  mapStateToProps,
  dispatch => bindActionCreators({ loadReadPlanet }, dispatch)
)
export class PlanetsDetailsPage extends Component {
    constructor(props) {
      super(props);
    }

    componentWillMount() {
      const {
        params,
        loadReadPlanet
      } = this.props;

      loadReadPlanet(params.id);
    }

    componentDidUpdate(prevProps) {
      const {
        params,
        loadReadPlanet
      } = this.props;
    
      let oldPlanetId = prevProps.params.id;
      let newPlanetId = params.id;
      if (newPlanetId !== oldPlanetId) {
        loadReadPlanet(newPlanetId);
      }
    }

  render() {  
    const {
      params,
      planets
    } = this.props;

    if (!planets ) {
      return(<div>Loading</div>);
    }

    let planet = planets[params.id];
    if (!planet) {
      return(<div>Loading</div>);
    }

    return (
      <section className={`${styles}`}>       
        <DocumentMeta {...metaData} />
    
        <div className="page-container">
          <div className="container">
            <Row>
              <Col xs={6} md={6} sm={6} lg={6} xsOffset={3} mdOffset={3} smOffset={3} lgOffset={3}>
                <PlanetDetail planet={ planet } />
              </Col>
            </Row>
          </div>
        </div>
      </section>
    );
  }
}
