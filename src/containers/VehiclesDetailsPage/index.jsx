import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { TitleMetaContent, DescriptionMetaContent, KeywordsMetaContent } from 'utils/constants';

import { Col, Row } from 'react-bootstrap';
import { VehicleDetail } from 'components/VehicleDetail';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadReadVehicle } from 'actions/vehicles'

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
    entities: { vehicles }
  } = state;
  
  return {
    vehicles
  }
}

@connect(
  mapStateToProps,
  dispatch => bindActionCreators({ loadReadVehicle }, dispatch)
)
export class VehiclesDetailsPage extends Component {
    constructor(props) {
      super(props);
    }

    componentWillMount() {
      const {
        params,
        loadReadVehicle
      } = this.props;

      loadReadVehicle(params.id);
    }

    componentDidUpdate(prevProps) {
      const {
        params,
        loadReadVehicle
      } = this.props;
    
      let oldVehicleId = prevProps.params.id;
      let newVehicleId = params.id;
      if (newVehicleId !== oldVehicleId) {
        loadReadVehicle(newVehicleId);
      }
    }

  render() {  
    const {
      params,
      vehicles
    } = this.props;

    if (!vehicles ) {
      return(<div>Loading</div>);
    }

    let vehicle = vehicles[params.id];
    if (!vehicle) {
      return(<div>Loading</div>);
    }

    return (
      <section className={`${styles}`}>       
        <DocumentMeta {...metaData} />
    
        <div className="page-container">
          <div className="container">
            <Row>
              <Col xs={6} md={6} sm={6} lg={6} xsOffset={3} mdOffset={3} smOffset={3} lgOffset={3}>
                <VehicleDetail vehicle={ vehicle } />
              </Col>
            </Row>
          </div>
        </div>
      </section>
    );
  }
}
