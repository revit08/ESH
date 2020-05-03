import React from 'react';
import { connect } from 'react-redux';
import { getImgPlaceHolder } from './../../utils';
const UserDetail = ({ user, type }) => {
  const { id, data } = user;
  let pic = '';
  let name = '';
  console.log('UserDetail', data);
  if (data && data.basic) {
    name = data.basic.find((x) => x.field === 'fName').val || '';
    pic = getImgPlaceHolder(name);
  }
  if (data && data.pic && data.pic.length > 0) {
    pic = data.pic[0].base64;
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-6 text-center">
            <div className="hero-img wow fadeInUp">
              <div className="img-border m-0">
                <img
                  alt="cmsImage"
                  className="img-center img-fluid  rounded-circle"
                  src={pic}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mh-header-info">
              <ul>
                {data &&
                  data.basic &&
                  data.basic.map((i) => (
                    <li>
                      <i className={`fa  ${i.ico}`}></i>
                      <span>
                        {i.name}: {i.val}
                      </span>
                    </li>
                  ))}
              </ul>
              <hr />
              <h5> Contact Infomation</h5>
              <ul>
                {data &&
                  data.contact &&
                  data.contact.map((i) => (
                    <li>
                      <i className={`fa  ${i.ico}`}></i>
                      <span>
                        {i.name}: {i.val}
                      </span>
                    </li>
                  ))}
              </ul>
              <hr />

              {data && data.subjects && (
                <div>
                  <h5> Subjects handled on semester</h5>
                  <ul>
                    {data.subjects.map((i, j) => (
                      <li>
                        {i.val && (
                          <span>
                            <span class="badge badge-primary badge-pill">
                              {' '}
                              {j + 1}
                            </span>{' '}
                            {i.val}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <hr />
                </div>
              )}
              {data && data.social && (
                <div>
                  <h5> Social Links</h5>
                  <ul className="social-icon wow fadeInUp">
                    {data.social.map((i) => (
                      <li>
                        <a
                          className="nav-link "
                          target="_blank"
                          rel="noopener noreferrer"
                          href={i.val}
                        >
                          <i className={`fa  ${i.ico}`}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect((state) => ({}), {})(UserDetail);
