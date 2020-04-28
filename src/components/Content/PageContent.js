import React from 'react';
import { connect } from 'react-redux';

const PageContent = ({ data }) => {
  const { description, title } = data;

  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 ">
            <div className="site-section-heading text-left mb-5 w-border">
              <h2>{title}</h2>
              <br />
              {description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect((state) => ({}), {})(PageContent);
