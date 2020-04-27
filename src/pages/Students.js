import React, { useEffect, useState, useRef, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';
import PageTitle from '../components/PageTitle/PageTitle';
import UserCard from '../components/UserCard/UserCard';
import MySpinner from '../components/MySpinner';

import { loadStudents } from '../store/actions/students';
import { setPageToLoad } from '../store/actions/header';

const Students = ({
  students: { isLoading, students, hasMoreItems, error },
  loadStudents,
  header,
  setPageToLoad,
}) => {
  // did mount
  useEffect(() => {
    loadStudents();
  }, []);

  //console.log(Students);
  if (error) return <Redirect to={'/error'} />;
  if (isLoading) return <MySpinner key={0} text={'Loading...'} />;
  console.log('Students', students);
  return (
    <Fragment>
      <PageTitle title="STUDENTS" desc="STUDENTS" />
      <Container className="margin-top">
        <Row className="mb-3">
          {students &&
            students.map((user, i) => <UserCard user={user} key={i} />)}
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
    students: state.studentsReducer,
    header: state.headerReducer,
  }),
  { loadStudents, setPageToLoad },
)(Students);
