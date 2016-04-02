import React, { Component } from 'react';

import 'style!./styles/app.scss';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import { bindActionCreators } from 'redux';

export class App extends Component {
  static propTypes = {
    // Injected by React Router
    children: React.PropTypes.any,
  };

  render() {
    const { children } = this.props

    return (
      <section>
          <Header />
          {children}
          <Footer/>
      </section>
    );
  }
}
