import React, { useEffect, useState, useRef } from 'react';
import moment from 'moment';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './styles.css';

const Home = () => {
  const [index, setIndex] = useState(0);
  const menuOne = [
    {
      class: 'students',
      link: 'students',
      title: 'STUDENTS',
      desc: '64 MEMBERS',
    },
    {
      class: 'staffs',
      link: 'staffs',
      title: 'STAFFS',
      desc: 'From All Department',
    },
    { class: 'events', link: 'page/about', title: 'ABOUT', desc: 'SINCE 2004' },
    {
      class: 'college',
      link: 'page/college',
      title: 'COLLEGE',
      desc: 'Other Links',
    },
  ];

  const today = new Date();
  const lastWd = '2004-06-02';
  //... units can be [seconds, minutes, hours, days, weeks, months, year
  const years = moment().diff(lastWd, 'years', false);
  const months = moment().diff(lastWd, 'months', false);
  const endOfMonth = moment(lastWd, 'YYYY-MM-DD').endOf('month');
  const days = moment().diff(lastWd, 'days', false);
  const daysd = moment().diff(endOfMonth, 'days', false);
  const starttoday = moment(today, 'YYYY-MM-DD').startOf('month');
  const thismonthdiff = moment().diff(starttoday, 'days', false);
  const dayos = days - daysd + thismonthdiff;

  return (
    <>
      <div className="site-blocks-cover bg-grouppic  overlay">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7 text-center">
              <h1 className="mb-4">JJCET</h1>
              <h2 className="mb-4">
                INFORMATION TECHNOLOGY <br /> 2004 - 08 BATCH
              </h2>
              <span className=" text-center">
                <span className="since-left">
                  {years} <span>YEARS</span>
                </span>
                <span className="since-left">
                  {months % years} <span>MONTHS</span>
                </span>
                <span className="since-left">
                  {dayos > 30 ? dayos - 30 : dayos} <span>DAYS</span>
                </span>
              </span>
              <h6 className="mt-4 mb-4">SINCE JOURNEY STARTED...</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
              <h6>WELCOME TO</h6>
              <h2 className="mb-5"> the REvit'08 Community</h2>
              <p>Somebody Please give nice content</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet, fugit nam obcaecati fuga itaque deserunt officia, error
                reiciendis ab quod?
              </p>
            </div>
          </div>
          <div className="row">
            {menuOne.map((menu, i) => (
              <div className="col-md-6 col-lg-3">
                <LinkContainer
                  to={menu.link}
                  className={`unit-9 unit-${menu.class}`}
                >
                  <Nav.Link>
                    <div className="image"></div>
                    <div className="unit-9-content">
                      <h2>{menu.title}</h2>
                      <span>{menu.desc}</span>
                    </div>
                  </Nav.Link>
                </LinkContainer>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="site-section bg-dark">
        <div className="container">
          <div className="row">
            <div
              className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto"
              data-aos="fade-up"
            >
              <h2 className="mb-5">News &amp; Events</h2>
              <p>Under Development</p>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 col-lg-4 mb-4 mb-lg-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a href="single.html">
                <img src="images/img_4.jpg" alt="Image" className="img-fluid" />
              </a>
              <div className="p-4 bg-white">
                <span className="d-block text-secondary small text-uppercase">
                  Jan 20th, 2019
                </span>
                <h2 className="h5 text-black mb-3">
                  <a href="single.html">This Is The Day, Party, Party!</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Row className="my-5">
        <Col xs={6} className="mx-auto">
          <blockquote className="blockquote text-center">
            <p className="mb-0">
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
              natoque penatibus et magnis dis parturient montes.
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Col>
      </Row>
    </>
  );
};

export default Home;
