import React, { useEffect, useState, useRef, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';
import PageTitle from '../components/PageTitle/PageTitle';
import UserCard from '../components/UserCard/UserCard';
import MySpinner from '../components/MySpinner';

import { loadProducts } from '../store/actions/products';
import { setPageToLoad } from '../store/actions/header';

import { config } from '../services/config';

const Students = ({
  products: { isLoading, products, hasMoreItems, error },
  loadProducts,
  header,
  setPageToLoad,
}) => {
  // did mount
  useEffect(() => {
    loadProducts(
      {
        page: { index: 0, size: 10 },
        sort: { key: 'none', direction: 'asc' },
        filter: { brand: 'none', color: 'none' },
      },
      false,
    );
  }, []);

  function fetchMoreData(pageToLoad) {
    // console.log('pageToLoad: ', pageToLoad);
    if (pageToLoad > 0) {
      loadProducts(
        {
          page: { index: 0, size: 10 },
          sort: { ...header.sortBy },
          filter: { ...header.filterBy },
        },
        true,
        () => setPageToLoad(header.pageToLoad + 1), // this way or race loop!!!
      );
      //console.log('header.pageToLoad: ', header.pageToLoad);
    }
  }

  //console.log(products);
  if (error) return <Redirect to={'/error'} />;
  if (isLoading) return <MySpinner key={0} text={'Loading...'} />;
  console.log('products', products);
  return (
    <Fragment>
      <PageTitle title="STUDENTS" desc="STUDENTS" />
      <Container className="margin-top">
        <Row className="mb-3">
          {products &&
            products.map((user, i) => <UserCard user={user} key={i} />)}
        </Row>
      </Container>
      {!error && !hasMoreItems && (
        <Row className="mb-3">
          <Col>
            <h4 className="text-center">No Students</h4>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default connect(
  (state) => ({
    products: state.productsReducer,
    header: state.headerReducer,
  }),
  { loadProducts, setPageToLoad },
)(Students);
