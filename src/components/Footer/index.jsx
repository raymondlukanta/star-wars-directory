import React, { Component } from 'react';

/* component styles */
import { styles } from './styles.scss';

export class Footer extends Component {
  render() {
    return (
      <footer className={`${ styles }`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">
              (c) 2016 MTFBWY
            </div>
          </div>
        </div>
      </footer>
    );
  };
}
