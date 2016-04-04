import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { TitleMetaContent, DescriptionMetaContent, KeywordsMetaContent } from 'utils/constants';

import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import { Film } from 'components/Film';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadReadFilmsList } from 'actions/films';

import Firebase from 'firebase';

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
    entities: { films }
  } = state;
  
  return {
    films
  }
}

@connect(
  mapStateToProps,
  dispatch => bindActionCreators({}, dispatch)
)
export class AnalyticsPage extends Component {
  constructor(props) {
    super(props);
    this._handleButtonClicked = this._handleButtonClicked.bind(this)
    this.state = {people_viewer: 0,people_liked: 0};
  }

  componentDidMount() {
    var _this = this;
    var myRootRef = new Firebase('https://star-wars-directory.firebaseio.com');
    myRootRef.child("people_viewer/number").on("value", function(snapshot) {
      _this.setState({people_viewer: snapshot.val()})
    });

    var myRootRef = new Firebase('https://star-wars-directory.firebaseio.com');
    myRootRef.child("people_liked/number").on("value", function(snapshot) {
      _this.setState({people_liked: snapshot.val()})
    });
  }

  render() { 
    let viewerNumber = this.state.people_viewer; 
    let likerNumber = this.state.people_liked; 
    

    return (
      <section className={`${styles}`}>       
        <DocumentMeta {...metaData} />
    
        <div className="page-container">
          <div className="container">
            <Row>
              <Col xs={12} md={12} sm={12} lg={6} lgOffset={3}>
                <h3>People have viewed this app {viewerNumber} times</h3>

                <h3>{likerNumber} People like this app.</h3>

                <Button onClick={ this._handleButtonClicked }>Like!</Button>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    );
  }

  _handleButtonClicked(data) {
    var myRootRef = new Firebase('https://star-wars-directory.firebaseio.com/people_liked/number');
    myRootRef.transaction(function(currentLike) {
      return currentLike+1;
    });
  };
}
