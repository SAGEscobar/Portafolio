import React, { Fragment } from 'react';
import Header from '../components/Header';
import Proyectos from '../components/Proyectos';
import Certificados from '../components/Certificados';
import Footer from '../components/Footer';

export default () => (
  <Fragment>
    <Header />
    <Proyectos />
    <Certificados />
    <Footer />
  </Fragment>
)