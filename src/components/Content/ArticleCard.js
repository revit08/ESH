import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

const ArticleCard = ({ data, id, ts }) => {
  const { description, title, date, author } = data;

  return (
    <>
      <LinkContainer to={`article/${id}`}>
        <Nav.Link>
          <div
            className="d-block d-md-flex podcast-entry bg-white mb-5"
            data-aos="fade-up"
          >
            <div className="text">
              <h3 className="font-weight-light"> {title}</h3>
              <div className=" mb-3 text-black">
                <span className="text-black-opacity-05">
                  <small>
                    By {author} <span className="sep">/</span>{' '}
                    {moment(ts / 1000).format('MM ddd, YYYY')}
                  </small>
                </span>
              </div>
              <div className="mb-4 text-black">
                {description && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: description.replace(/\n/g, '<br />'),
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </Nav.Link>
      </LinkContainer>
    </>
  );
};

export default connect((state) => ({}), {})(ArticleCard);
