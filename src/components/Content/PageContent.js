import React from 'react';
import { connect } from 'react-redux';

const PageContent = ({ data }) => {
  const { description } = data;

  return (
    <>
      <div className="container pt-3">
        <div class="row justify-content-md-center">
          <div class="col-sm-9 ">
            <div className="site-section-heading text-left mb-5 w-border">
              <br />
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
      </div>
    </>
  );
};

export default connect((state) => ({}), {})(PageContent);
