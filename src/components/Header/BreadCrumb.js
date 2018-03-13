import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Column, Row, Breadcrumbs, BreadcrumbItem, Button, Colors } from 'react-foundation';

import history from '../../utils/history';
import './Header.scss';

class BreadCrumb extends Component {

  constructor() {
    super();

    this.createNavigation = this.createNavigation.bind(this);
    this.state = this.createNavigation(location);
  }

  componentWillMount() {
    this.unlisten = history.listen((location) => {
      this.updateState(location);
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  createNavigation(location) {
    const auxState = {
      paths: [{name: 'Inicio', href: '/'}],
      currentPath: {}
    };
    let names = location.pathname.split('/');
    names = names.filter(name => name !== '');
    names.forEach((name) => {
      auxState.paths.push({
        name: name.replace(/\b\w/g, l => l.toUpperCase()),
        href: `/${name}`,
      });
    });
    auxState.currentPath = auxState.paths.pop();
    return auxState;
  }

  updateState(location) {
    this.setState(this.createNavigation(location));
  }

  render() {
    const currentPath = this.state.currentPath;
    const paths = this.state.paths;

    return (
      <nav role="navigation">
         <Breadcrumbs>
           {
             paths.map((path, i) =>
                (<BreadcrumbItem key={i} onClick={() => { history.push(path.href); }}>
                  <a>
                    {path.name}
                  </a>
                </BreadcrumbItem>)
             )
           }
           <BreadcrumbItem
             isDisabled onClick={() => { history.push(currentPath.href); }}>
             <a>{currentPath.name}</a>
           </BreadcrumbItem>
         </Breadcrumbs>
       </nav>
    );
  }
}

const { object } = PropTypes;

BreadCrumb.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  location: object.isRequired,
};

export default BreadCrumb;
