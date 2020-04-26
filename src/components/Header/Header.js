import React, { Fragment, useEffect } from 'react';
import { withRouter } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';

import { GoogleLogout } from 'react-google-login';

import {
  setSortBy,
  setFilterBy,
  setPageToLoad,
} from '../../store/actions/header';
import {
  getGoogleUser,
  logOutGoogleUser,
  getLocalUser,
  logoutLocalUser,
} from '../../store/actions/auth';
import { config } from '../../services/config';

import './styles.css';

const Header = ({
  location,
  header,

  setPageToLoad,
  liked,
  cart,
  auth,
  getGoogleUser,
  logOutGoogleUser,
  getLocalUser,
  logoutLocalUser,
}) => {
  const { pathname } = location;

  useEffect(() => {
    getGoogleUser();
    getLocalUser();
  }, []);

  function logoutSuccess() {
    logOutGoogleUser();
  }

  function logoutLocalUserClick() {
    logoutLocalUser();
  }

  function getCurrentUser() {
    let user = null;
    user = auth.googleUser ? 'google' : auth.localUser ? 'local' : null;
    return user;
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/home"> REVIT 08</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" activeKey={pathname}>
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/students">
              <Nav.Link>Students</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/liked">
              <Nav.Link>
                <i className="fa fa-heart"></i> Liked{' '}
                {liked.likedProducts.length > 0 && (
                  <Badge pill variant="light">
                    {liked.likedProducts.length}
                  </Badge>
                )}
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav activeKey={pathname}>
            {!getCurrentUser() ? (
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fa fa-sign-in"></i> Log in
                </Nav.Link>
              </LinkContainer>
            ) : (
              <NavDropdown
                title={
                  <>
                    <i className="fa fa-user"></i> <span>Logged in</span>
                  </>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <div
                    className="row"
                    style={{ minWidth: '15rem', maxHeight: '4rem' }}
                  >
                    <div className="col-lg-3 col-2 img-container">
                      <img
                        alt="te"
                        src={
                          getCurrentUser() === 'google'
                            ? auth.googleUser.imageUrl
                            : require(`../../static/products/mepps1.jpg`)
                        }
                        className="user-img"
                      />
                    </div>
                    <div className="col-lg-9 col-10 text-left">
                      <p className="">
                        <strong>
                          {getCurrentUser() === 'google'
                            ? auth.googleUser.name
                            : auth.localUser.name}
                        </strong>
                      </p>
                      <p className="small">
                        {getCurrentUser() === 'google'
                          ? auth.googleUser.email
                          : auth.localUser.email}
                      </p>
                    </div>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {getCurrentUser() === 'google' ? (
                  <GoogleLogout
                    clientId={config.clientId}
                    buttonText="Logout"
                    onLogoutSuccess={logoutSuccess}
                    render={(renderProps) => (
                      <>
                        <LinkContainer to="/profile">
                          <NavDropdown.Item className="text-center">
                            Profile
                          </NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <NavDropdown.Item
                          className="text-center"
                          onClick={renderProps.onClick}
                        >
                          Google log out
                        </NavDropdown.Item>
                      </>
                    )}
                  />
                ) : (
                  <>
                    <LinkContainer to="/profile">
                      <NavDropdown.Item className="text-center">
                        Profile
                      </NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      className="text-center"
                      onClick={logoutLocalUserClick}
                    >
                      Local log out
                    </NavDropdown.Item>
                  </>
                )}
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default connect(
  (state) => ({
    header: state.headerReducer,
    liked: state.likedReducer,
    cart: state.cartReducer,
    auth: state.authReducer,
  }),
  {
    setPageToLoad,
    getGoogleUser,
    logOutGoogleUser,
    getLocalUser,
    logoutLocalUser,
  },
)(withRouter(Header));
