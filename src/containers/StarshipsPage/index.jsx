import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { TitleMetaContent, DescriptionMetaContent, KeywordsMetaContent } from 'utils/constants';

import { Col, ListGroup, Row } from 'react-bootstrap';
import { Starship } from 'components/Starship';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadReadStarshipsList } from 'actions/starships';

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
    entities: { starships },
    pagination: { starships_paging }
  } = state;

  return {
    starships,
    starshipsPaging: starships_paging
  };
}

@connect(
  mapStateToProps,
  dispatch => bindActionCreators({ loadReadStarshipsList }, dispatch)
)
export class StarshipsPage extends Component {
  constructor(props) {
    super(props);
    this._handleLoadMore = this._handleLoadMore.bind(this);
  }

  componentWillMount() {
    const {
      loadReadStarshipsList
    } = this.props;

    loadReadStarshipsList(1);
  }

  render() {  
    const {
       starships,
       starshipsPaging
    } = this.props;

    if (!starships || !starshipsPaging) {
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
                    hasMore= { starshipsPaging.next_url }
                    loader= {<div className="loader">Loading ...</div>}>
                      {
                       Object.keys(starships).map((id) => <Starship key={ id } starship={starships[id]}/>)
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
      starshipsPaging
    } = this.props;

    if (starshipsPaging) {
      let nextPage = starshipsPaging.next_url.split("=")[1];
      this.props.loadReadStarshipsList(nextPage);
    } 
  }
}
