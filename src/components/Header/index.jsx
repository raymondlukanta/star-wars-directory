import React, { Component } from 'react';
import { Link } from 'react-router';

import { styles } from './styles.scss';

export class Header extends Component {
  render() {
    return (
      <div className={`${styles}`}>
        <header ref="header">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 col-sm-2 col-md-2 col-lg-2 logo">
                <Link to="home" activeClassName="active">Star Wars Directory</Link>
              </div>
              <div className="col-xs-7 col-sm-10 col-md-10 col-lg-10">
                <nav>        
                  <Link className="pull-right" to="home" activeClassName="active">Home</Link>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  };
}
