import React, { useEffect, useState, useRef, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';
import PageTitle from '../components/PageTitle/PageTitle';
import UserCard from '../components/UserCard/UserCard';
import MySpinner from '../components/MySpinner';

import { loadStaffs } from '../store/actions/staffs';
import { setPageToLoad } from '../store/actions/header';

const Staffs = ({
  staffs: { isLoading, staffs, hasMoreItems, error },
  loadStaffs,
  header,
  setPageToLoad,
}) => {
  // did mount
  useEffect(() => {
    loadStaffs();
  }, []);

  console.log(staffs);
  if (error) return <Redirect to={'/error'} />;
  if (isLoading) return <MySpinner key={0} text={'Loading...'} />;
  console.log('Staffs', staffs);
  return (
    <Fragment>
      <PageTitle title="StaffS" desc="StaffS" />
      <Container className="margin-top">
        <Row className="mb-3">
          {staffs && staffs.map((user, i) => <UserCard user={user} key={i} />)}
        </Row>
      </Container>
      {!error && !hasMoreItems && (
        <Row className="mb-3">
          <Col>
            <h4 className="text-center">No Staffs</h4>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default connect(
  (state) => ({
    staffs: state.staffsReducer,
    header: state.headerReducer,
  }),
  { loadStaffs, setPageToLoad },
)(Staffs);
