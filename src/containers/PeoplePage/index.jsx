import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { TitleMetaContent, DescriptionMetaContent, KeywordsMetaContent } from 'utils/constants';

import { Col, ListGroup, Row } from 'react-bootstrap';

import { Person } from 'components/Person';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadReadPeopleList } from 'actions/people';

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
    entities: { people },
    pagination: { people_paging }
  } = state;

  return {
    people,
    peoplePaging: people_paging
  };
}

@connect(
  mapStateToProps,
  dispatch => bindActionCreators({ loadReadPeopleList }, dispatch)
)
export class PeoplePage extends Component {
  constructor(props) {
    super(props);
    this._handleLoadMore = this._handleLoadMore.bind(this);
  }

  componentWillMount() {
    const {
      loadReadPeopleList
    } = this.props;

    loadReadPeopleList(1);
  }



  render() {  
    const {
       people,
       peoplePaging
    } = this.props;

    if (!people || !peoplePaging) {
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
                    hasMore= { peoplePaging.next_url }
                    loader= {<div className="loader">Loading ...</div>}>
                      {
                       Object.keys(people).map((id) => <Person key={ id } person={people[id]}/>)
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
      peoplePaging
    } = this.props;

    if (peoplePaging) {
      let nextPage = peoplePaging.next_url.split("=")[1];
      this.props.loadReadPeopleList(nextPage);
    } 
  }
}
