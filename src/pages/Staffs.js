import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

import Container from 'react-bootstrap/Container';
import PageTitle from '../components/PageTitle/PageTitle';
import UserCard from '../components/UserCard/UserCard';
import UserDetail from '../components/UserCard/UserDetail';

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
  const [UserModelView, UserModelToggle] = useState(false);
  const [userViewData, setUserViewData] = useState(null);
  useEffect(() => {
    loadStaffs();
  }, []);
  const openUserView = (user) => {
    console.log('g', user);
    setUserViewData(user);
    UserModelToggle(true);
  };
  //console.log(Students);
  if (error) return <Redirect to={'/error'} />;
  if (isLoading) return <MySpinner key={0} text={'Loading...'} />;
  /// console.log('Staffs', staffs);
  return (
    <Fragment>
      <PageTitle title="StaffS" desc="StaffS" />
      <Container className="pt-4">
        <Row className="mb-1">
          {staffs &&
            staffs.map((user, i) => (
              <UserCard
                user={user.data}
                key={i}
                openUserView={() => openUserView(user)}
              />
            ))}
        </Row>
      </Container>

      <Modal
        size="lg"
        show={UserModelView}
        onHide={() => UserModelToggle(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <UserDetail user={userViewData} type="staff" />
        </Modal.Body>
      </Modal>
      {error && (
        <Row className="mb-2">
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
