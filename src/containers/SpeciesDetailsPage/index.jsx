import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { TitleMetaContent, DescriptionMetaContent, KeywordsMetaContent } from 'utils/constants';

import { Col, Row } from 'react-bootstrap';
import { SpeciesDetail } from 'components/SpeciesDetail';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadReadSpecies } from 'actions/species'

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
    entities: { species }
  } = state;
  
  return {
    speciesList: species
  }
}

@connect(
  mapStateToProps,
  dispatch => bindActionCreators({ loadReadSpecies }, dispatch)
)
export class SpeciesDetailsPage extends Component {
    constructor(props) {
      super(props);
    }

    componentWillMount() {
      const {
        params,
        loadReadSpecies
      } = this.props;

      loadReadSpecies(params.id);
    }

    componentDidUpdate(prevProps) {
      const {
        params,
        loadReadSpecies
      } = this.props;
    
      let oldSpeciesId = prevProps.params.id;
      let newSpeciesId = params.id;
      if (newSpeciesId !== oldSpeciesId) {
        loadReadSpecies(newSpeciesId);
      }
    }

  render() {  
    const {
      params,
      speciesList
    } = this.props;

    if (!speciesList ) {
      return(<div>Loading</div>);
    }



    let species = speciesList[params.id];
    if (!species) {
      return(<div>Loading</div>);
    }
    
    return (
      <section className={`${styles}`}>       
        <DocumentMeta {...metaData} />
    
        <div className="page-container">
          <div className="container">
            <Row>
              <Col xs={12} md={12} sm={12} lg={6} lgOffset={3}>
                <SpeciesDetail species={ species } />
              </Col>
            </Row>
          </div>
        </div>
      </section>
    );
  }
}
