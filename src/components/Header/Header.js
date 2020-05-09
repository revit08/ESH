import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import { GoogleLogout } from 'react-google-login';

import { setPageToLoad } from '../../store/actions/header';
import {
  getGoogleUser,
  logOutGoogleUser,
  getLocalUser,
  logoutLocalUser,
} from '../../store/actions/auth';
import { config } from '../../services/config';

import './styles.css';

const Header = ({
  nav,
  location,
  identity,
  name,
  avatar_url,
  setPageToLoad,
  liked,
  cart,
  auth,
  setDialog,
}) => {
  const { pathname } = location;

  useEffect(() => {
    getGoogleUser();
    getLocalUser();
  }, []);

  function getCurrentUser() {
    let user = null;
    user = auth.googleUser ? 'google' : auth.localUser ? 'local' : null;
    return user;
  }

  const { navMenu } = nav;
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/"> REVIT 08</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" activeKey={pathname}>
            {navMenu.map((menu, i) => (
              <LinkContainer
                key={`footermenuLink${i}`}
                to={menu.link}
                className={`${menu.class}`}
              >
                <Nav.Link>{menu.title}</Nav.Link>
              </LinkContainer>
            ))}

            
          </Nav>
          <Nav activeKey={pathname}>
            {identity && identity.isLoggedIn ? (
              <>
                <Navbar.Text>{name}</Navbar.Text>
                <LinkContainer to="/profile">
                  <Nav.Link>
                    {avatar_url && (
                      <img
                        alt="user name"
                        src={avatar_url}
                        className="userIcon"
                      />
                    )}
                  </Nav.Link>
                </LinkContainer>
                <button
                  className="btn btn-link"
                  onClick={() => setDialog(true)}
                >
                  LOG OUT
                </button>
              </>
            ) : (
              <>
                <button
                  className="btn btn-link"
                  onClick={() => setDialog(true)}
                >
                  LOG IN
                </button>
              </>
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
