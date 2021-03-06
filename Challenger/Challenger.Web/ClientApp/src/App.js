import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Chart } from './components/Chart';
import { TeamsSplit } from './components/TeamsSplit';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>
            <Route exact path='/' component={Chart} />
            <Route path='/chart' component={Chart} />
            <Route path='/split' component={TeamsSplit} />
      </Layout>
    );
  }
}
