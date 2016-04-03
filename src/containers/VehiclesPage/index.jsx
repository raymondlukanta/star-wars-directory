import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { TitleMetaContent, DescriptionMetaContent, KeywordsMetaContent } from 'utils/constants';

import { Col, ListGroup, Row } from 'react-bootstrap';
import { Vehicle } from 'components/Vehicle';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadReadVehiclesList } from 'actions/vehicles';

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
    entities: { vehicles },
    pagination: { vehicles_paging }
  } = state;

  return {
    vehicles,
    vehiclesPaging: vehicles_paging
  };
}

@connect(
  mapStateToProps,
  dispatch => bindActionCreators({ loadReadVehiclesList }, dispatch)
)
export class VehiclesPage extends Component {
  constructor(props) {
    super(props);
    this._handleLoadMore = this._handleLoadMore.bind(this);
  }

  componentWillMount() {
    const {
      loadReadVehiclesList
    } = this.props;

    loadReadVehiclesList(1);
  }

  render() {  
    const {
       vehicles,
       vehiclesPaging
    } = this.props;

    if (!vehicles || !vehiclesPaging) {
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
                  hasMore= { vehiclesPaging.next_url }
                  loader= {<div className="loader">Loading ...</div>}>
                    {
                     Object.keys(vehicles).map((id) => <Vehicle key={ id } vehicle={vehicles[id]}/>)
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
      vehiclesPaging
    } = this.props;

    if (vehiclesPaging) {
      let nextPage = vehiclesPaging.next_url.split("=")[1];
      this.props.loadReadVehiclesList(nextPage);
    } 
  }
}
