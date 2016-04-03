import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { TitleMetaContent, DescriptionMetaContent, KeywordsMetaContent } from 'utils/constants';

import { Col, ListGroup, Row } from 'react-bootstrap';
import { Species } from 'components/Species';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadReadSpeciesList } from 'actions/species';

import { styles } from './styles.scss';

var InfiniteScroll = require('react-infinite-scroll')(React);

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
    entities: { species },
    pagination: { species_paging }
  } = state;

  return {
    speciesList: species,
    speciesPaging: species_paging
  };
}

@connect(
  mapStateToProps,
  dispatch => bindActionCreators({ loadReadSpeciesList }, dispatch)
)
export class SpeciesPage extends Component {
  constructor(props) {
    super(props);
    this._handleLoadMore = this._handleLoadMore.bind(this);
  }

  componentWillMount() {
    const {
      loadReadSpeciesList
    } = this.props;

    loadReadSpeciesList(1);
  }

  render() {  
    const {
       speciesList,
       speciesPaging
    } = this.props;

    if (!speciesList || !speciesPaging) {
      return(<div>Loading</div>)
    }
    return (
      <section className={`${styles}`}>       
        <DocumentMeta {...metaData} />
    
        <div className="page-container">
          <div className="container">
            <Row>
              <Col xs={6} md={6} sm={6} lg={6} xsOffset={3} mdOffset={3} smOffset={3} lgOffset={3}>
                <ListGroup>
                <InfiniteScroll
                  pageStart= "1"
                  loadMore= { this._handleLoadMore }
                  hasMore= { speciesPaging.next_url }
                  loader= {<div className="loader">Loading ...</div>}>
                    {
                     Object.keys(speciesList).map((id) => <Species key={ id } species={speciesList[id]}/>)
                    }
                </InfiniteScroll>
                </ListGroup>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    );
  }

  _handleLoadMore() {
    const {
      speciesPaging
    } = this.props;

    if (speciesPaging) {
      let nextPage = speciesPaging.next_url.split("=")[1];
      this.props.loadReadSpeciesList(nextPage);
    } 
  }
}
