import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { TitleMetaContent, DescriptionMetaContent, KeywordsMetaContent } from 'utils/constants';

import { Col, Row } from 'react-bootstrap';
import { PersonDetail } from 'components/PersonDetail';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadReadPerson } from 'actions/people'

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
    entities: { people }
  } = state;
  
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
        loadReadPerson
      } = this.props;

      loadReadPerson(params.id);
    }

    componentDidUpdate(prevProps) {
      const {
        params,
        loadReadPerson
      } = this.props;
    
      let oldPersonId = prevProps.params.id;
      let newPersonId = params.id;
      if (newPersonId !== oldPersonId) {
        loadReadPerson(newPersonId);
      }
    }

  render() {  
    const {
      params,
      people
    } = this.props;

    if (!people ) {
      return(<div>Loading</div>);
    }

    let person = people[params.id];
    if (!person) {
      return(<div>Loading</div>);
    }

    return (
      <section className={`${styles}`}>       
        <DocumentMeta {...metaData} />
    
        <div className="page-container">
          <div className="container">
            <Row>
              <Col xs={12} md={12} sm={12} lg={6} lgOffset={3}>
                <PersonDetail person={ person } />
              </Col>
            </Row>
          </div>
        </div>
      </section>
    );
  }
}
