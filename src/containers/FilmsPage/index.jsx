import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { TitleMetaContent, DescriptionMetaContent, KeywordsMetaContent } from 'utils/constants';

import { Col, ListGroup, Row } from 'react-bootstrap';
import { Film } from 'components/Film';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadReadFilmsList } from 'actions/films';

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
    entities: { films },
    pagination: { films_paging }
  } = state;

  return {
    films,
    filmsPaging: films_paging
  };
}

@connect(
  mapStateToProps,
  dispatch => bindActionCreators({ loadReadFilmsList }, dispatch)
)
export class FilmsPage extends Component {
  constructor(props) {
    super(props);
    this._handleLoadMore = this._handleLoadMore.bind(this);
  }

  componentWillMount() {
    const {
      loadReadFilmsList
    } = this.props;

    loadReadFilmsList(1);
  }

  render() {  
    const {
       films,
       filmsPaging
    } = this.props;

    if (!films || !filmsPaging) {
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
                  hasMore= { filmsPaging.next_url }
                  loader= {<div className="loader">Loading ...</div>}>
                    {
                     Object.keys(films).map((id) => <Film key={ id } film={films[id]}/>)
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
      filmsPaging
    } = this.props;

    if (filmsPaging) {
      let nextPage = filmsPaging.next_url.split("=")[1];
      this.props.loadReadFilmsList(nextPage);
    } 
  }
}
