import React from 'react';
import { connect } from 'react-redux';

import TimeLine from '../Common/TimeLine';
const PageContent = ({ data }) => {
  const { description, content } = data;

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

              {content &&
                content.map((item, i) => (
                  <div>
                    <h5>{item.title}</h5>
                    {item.type === 'timeline' && (
                      <TimeLine data={item.data}></TimeLine>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect((state) => ({}), {})(PageContent);
