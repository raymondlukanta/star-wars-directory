import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { TitleMetaContent, DescriptionMetaContent, KeywordsMetaContent } from 'utils/constants';

import { Col, Row } from 'react-bootstrap';
import { StarshipDetail } from 'components/StarshipDetail';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadReadStarship } from 'actions/starships'

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
    entities: { starships }
  } = state;
  
  return {
    starships
  }
}

@connect(
  mapStateToProps,
  dispatch => bindActionCreators({ loadReadStarship }, dispatch)
)
export class StarshipsDetailsPage extends Component {
    constructor(props) {
      super(props);
    }

    componentWillMount() {
      const {
        params,
        loadReadStarship
      } = this.props;

      loadReadStarship(params.id);
    }

    componentDidUpdate(prevProps) {
      const {
        params,
        loadReadStarship
      } = this.props;
    
      let oldStarshipId = prevProps.params.id;
      let newStarshipId = params.id;
      if (newStarshipId !== oldStarshipId) {
        loadReadStarship(newStarshipId);
      }
    }

  render() {  
    const {
      params,
      starships
    } = this.props;

    if (!starships ) {
      return(<div>Loading</div>);
    }

    let starship = starships[params.id];
    if (!starship) {
      return(<div>Loading</div>);
    }

    return (
      <section className={`${styles}`}>       
        <DocumentMeta {...metaData} />
    
        <div className="page-container">
          <div className="container">
            <Row>
              <Col xs={6} md={6} sm={6} lg={6} xsOffset={3} mdOffset={3} smOffset={3} lgOffset={3}>
                <StarshipDetail starship={ starship } />
              </Col>
            </Row>
          </div>
        </div>
      </section>
    );
  }
}
