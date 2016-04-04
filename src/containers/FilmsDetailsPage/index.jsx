import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { TitleMetaContent, DescriptionMetaContent, KeywordsMetaContent } from 'utils/constants';

import { Col, Row } from 'react-bootstrap';
import { FilmDetail } from 'components/FilmDetail';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadReadFilm } from 'actions/films'

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
    entities: { films }
  } = state;
  
  return {
    films
  }
}

@connect(
  mapStateToProps,
  dispatch => bindActionCreators({ loadReadFilm }, dispatch)
)
export class FilmsDetailsPage extends Component {
    constructor(props) {
      super(props);
    }

    componentWillMount() {
      const {
        params,
        loadReadFilm
      } = this.props;

      loadReadFilm(params.id);
    }

    componentDidUpdate(prevProps) {
      const {
        params,
        loadReadFilm
      } = this.props;
    
      let oldFilmId = prevProps.params.id;
      let newFilmId = params.id;
      if (newFilmId !== oldFilmId) {
        loadReadFilm(newFilmId);
      }
    }

  render() {  
    const {
      params,
      films
    } = this.props;

    if (!films ) {
      return(<div>Loading</div>);
    }

    let film = films[params.id];
    if (!film) {
      return(<div>Loading</div>);
    }

    return (
      <section className={`${styles}`}>       
        <DocumentMeta {...metaData} />
    
        <div className="page-container">
          <div className="container">
            <Row>
              <Col xs={12} md={12} sm={12} lg={6} lgOffset={3}>
                <FilmDetail film={ film } />
              </Col>
            </Row>
          </div>
        </div>
      </section>
    );
  }
}
