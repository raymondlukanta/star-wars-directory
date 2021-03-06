import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { TitleMetaContent, DescriptionMetaContent, KeywordsMetaContent } from 'utils/constants';

import { Col, ListGroup, Row } from 'react-bootstrap';
import { Planet } from 'components/Planet';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadReadPlanetsList } from 'actions/planets';

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
    entities: { planets },
    pagination: { planets_paging }
  } = state;

  return {
    planets,
    planetsPaging: planets_paging
  };
}

@connect(
  mapStateToProps,
  dispatch => bindActionCreators({ loadReadPlanetsList }, dispatch)
)
export class PlanetsPage extends Component {
  constructor(props) {
    super(props);
    this._handleLoadMore = this._handleLoadMore.bind(this);
  }

  componentWillMount() {
    const {
      loadReadPlanetsList
    } = this.props;

    loadReadPlanetsList(1);
  }

  render() {  
    const {
       planets,
       planetsPaging
    } = this.props;

    if (!planets || !planetsPaging) {
      return(<div>Loading</div>)
    }
    return (
      <section className={`${styles}`}>       
        <DocumentMeta {...metaData} />
    
        <div className="page-container">
          <div className="container">
            <Row>
              <Col xs={12} md={12} sm={12} lg={6} lgOffset={3}>
                <ListGroup>
                  <InfiniteScroll
                    pageStart= "1"
                    loadMore= { this._handleLoadMore }
                    hasMore= { planetsPaging.next_url }
                    loader= {<div className="loader">Loading ...</div>}>
                      {
                       Object.keys(planets).map((id) => <Planet key={ id } planet={planets[id]}/>)
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
      planetsPaging
    } = this.props;

    if (planetsPaging) {
      let nextPage = planetsPaging.next_url.split("=")[1];
      this.props.loadReadPlanetsList(nextPage);
    } 
  }
}
