import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { TitleMetaContent, DescriptionMetaContent, KeywordsMetaContent } from 'utils/constants';

import { ButtonInput, Col, Image, Input, ListGroup, Panel, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import { PersonDetail } from 'components/PersonDetail';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadReadPerson } from 'actions/people'

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
    entities: { people }
  } = state
  return {
    people
  }
}

@connect(
  mapStateToProps,
  dispatch => bindActionCreators({ loadReadPerson }, dispatch)
)
export class PeopleDetailsPage extends Component {
    constructor(props) {
      super(props);
    }

    componentWillMount() {
      const {
        params,
        people,
        loadReadPerson
      } = this.props

      loadReadPerson(params.id)
    }

    componentDidUpdate(prevProps) {
      const {
        params,
        people,
        loadReadPerson
      } = this.props
    
      let oldPersonId = prevProps.params.id
      let newPersonId = params.id
      if (newPersonId !== oldPersonId) {
        loadReadPerson(newPersonId)
      }
    }

  render() {  
    const {
      params,
      people
    } = this.props

    if (!people) {
      return(<div>Loading</div>)
    }
    let person = people[params.id]
    console.log("params.id")
    console.log(params.id)
    console.log("people")
    console.log(people)
    return (
      <section className={`${styles}`}>       
        <DocumentMeta {...metaData} />
    
        <div className="page-container">
          <div className="container">
            <Row>
              <Col xs={6} md={6} sm={6} lg={6} xsOffset={3} mdOffset={3} smOffset={3} lgOffset={3}>
                <PersonDetail person={ person } />
              </Col>
            </Row>
          </div>
        </div>
      </section>
    );
  }
}
