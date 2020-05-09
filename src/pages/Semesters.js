import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';
import PageTitle from '../components/PageTitle/PageTitle';
import SemesterCard from '../components/Content/SemesterCard';
import MySpinner from '../components/MySpinner';

import { loadSemesters } from '../store/actions/semesters';
import { setPageToLoad } from '../store/actions/header';

const Semesters = ({
  semesters: { isLoading, semesters, hasMoreItems, error },
  loadSemesters,
  header,
  setPageToLoad,
}) => {
  // did mount
  useEffect(() => {
    loadSemesters();
  }, []);

  function getId(todo) {
    if (!todo.ref) {
      return null;
    }
    return todo.ref['@ref'].id;
  }

  // console.log(semesters);
  if (error) return <Redirect to={'/error'} />;
  if (isLoading) return <MySpinner key={0} text={'Loading...'} />;
  console.log('semesters', semesters);
  return (
    <Fragment>
      <PageTitle title="SEMESTERS" desc="semesters" />
      <Container fluid className="m-0 p-0 ">
        {semesters &&
          semesters.map((data, i) => (
            <SemesterCard data={data.data} key={i} ind={i} />
          ))}
      </Container>
      {error && (
        <Row className="mb-3">
          <Col>
            <h4 className="text-center">No semesters</h4>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default connect(
  (state) => ({
    semesters: state.semestersReducer,
    header: state.headerReducer,
  }),
  { loadSemesters, setPageToLoad },
)(Semesters);
