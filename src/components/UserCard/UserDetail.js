import React from 'react';
import { connect } from 'react-redux';

const UserDetail = ({ user, type }) => {
  const { id, data } = user;

  const userIcon =
    'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTI4cHgiIGhlaWdodD0iMTI4cHgiPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI1NiIgeTE9IjUxNCIgeDI9IjI1NiIgeTI9IjIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1MTQpIj4KCTxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzJBRjU5OCIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA5RUZEIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfMV8pOyIgZD0iTTQzNy4wMiwzMzAuOThjLTI3Ljg4My0yNy44ODItNjEuMDcxLTQ4LjUyMy05Ny4yODEtNjEuMDE4ICBDMzc4LjUyMSwyNDMuMjUxLDQwNCwxOTguNTQ4LDQwNCwxNDhDNDA0LDY2LjM5MywzMzcuNjA3LDAsMjU2LDBTMTA4LDY2LjM5MywxMDgsMTQ4YzAsNTAuNTQ4LDI1LjQ3OSw5NS4yNTEsNjQuMjYyLDEyMS45NjIgIGMtMzYuMjEsMTIuNDk1LTY5LjM5OCwzMy4xMzYtOTcuMjgxLDYxLjAxOEMyNi42MjksMzc5LjMzMywwLDQ0My42MiwwLDUxMmg0MGMwLTExOS4xMDMsOTYuODk3LTIxNiwyMTYtMjE2czIxNiw5Ni44OTcsMjE2LDIxNmg0MCAgQzUxMiw0NDMuNjIsNDg1LjM3MSwzNzkuMzMzLDQzNy4wMiwzMzAuOTh6IE0xNDgsMTQ4YzAtNTkuNTUyLDQ4LjQ0OS0xMDgsMTA4LTEwOHMxMDgsNDguNDQ4LDEwOCwxMDhzLTQ4LjQ0OSwxMDgtMTA4LDEwOCAgUzE0OCwyMDcuNTUyLDE0OCwxNDh6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=';
  const userImage = (
    <img
      alt="cmsImage"
      className="img-center img-fluid"
      src={user && user.flagimg ? user.flagimg.base64 : userIcon}
    />
  );
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-6">
            <div className="mh-header-info">
              {data.spr && (
                <div className="mh-promo wow fadeInUp">
                  <span>data.spr </span>
                </div>
              )}

              <h5> Personal and Contact Infomation</h5>
              <p>{data.description || ''}</p>
              <hr />
              <ul>
                {data.dob && (
                  <li>
                    <i className="fa fa-birthday-cake"></i>
                    <span>{data.dob}</span>
                  </li>
                )}
                {data.anniversary && (
                  <li>
                    <i className="fa fa-star"></i>
                    <span>{data.anniversary}</span>
                  </li>
                )}
                {data.email && (
                  <li>
                    <i className="fa fa-envelope"></i>
                    <span>{data.email}</span>
                  </li>
                )}
                {data.location && (
                  <li>
                    <i className="fa fa-map-marker"></i>
                    <span>{data.location}</span>
                  </li>
                )}
                {data.native && (
                  <li>
                    <i className="fa fa-map-marker"></i>
                    <span>{data.native}</span>
                  </li>
                )}
                {data.work && (
                  <li>
                    <i className="fa fa-briefcase"></i> {data.work} -{' '}
                    {data.designation}
                  </li>
                )}
                {data.phone && (
                  <li>
                    <i className="fa fa-phone"></i> {data.phone} -{' '}
                    {data.designation}
                  </li>
                )}
              </ul>
              <hr />
              {type === 'staff' && (
                <div>
                  <h5> Subjects Handled</h5>
                  <ul className="">
                    <table>
                      {data.subjects &&
                        Object.keys(data.subjects).map((sub, ii) => {
                          return (
                            <React.Fragment key={sub}>
                              {data.subjects[sub].length > 0 && (
                                <tr>
                                  <td>Semester {ii}</td>
                                  <td>{data.subjects[sub]}</td>
                                </tr>
                              )}
                            </React.Fragment>
                          );
                        })}{' '}
                    </table>
                  </ul>
                </div>
              )}

              <hr />
              <h5> In Social</h5>
              <ul className="social-icon wow fadeInUp">
                {data.social &&
                  Object.keys(data.social).map((sociallink) => {
                    return (
                      <React.Fragment key={sociallink}>
                        {data.social[sociallink] && (
                          <li>
                            <a
                              className="nav-link "
                              target="_blank"
                              rel="noopener noreferrer"
                              color={sociallink}
                              href={data.social[sociallink]}
                            >
                              <i className={`fa fa-${sociallink}`}></i>
                            </a>
                          </li>
                        )}
                      </React.Fragment>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="hero-img wow fadeInUp">
              <div className="img-border">
                {' '}
                <img
                  alt="cmsImage"
                  className="img-center img-fluid  rounded-circle"
                  src={data.flagimg ? data.flagimg.base64 : userIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect((state) => ({}), {})(UserDetail);
