import React, { useEffect, useState, useRef, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';

import MySpinner from '../components/MySpinner';
import PageTitle from '../components/PageTitle/PageTitle';
import PageContent from '../components/Content/PageContent';

import { loadPage } from '../store/actions/pageDetails';
import { showToast, hideToast } from '../store/actions/toast';

const Page = ({
  pageDetails,
  loadPage,
  match,
  liked,
  showToast,
  hideToast,
}) => {
  const { page, isLoading, error } = pageDetails;

  useEffect(() => {
    loadPage(match.params.id);
  }, []);

  if (error) return <Redirect to={'/error'} />;
  if (isLoading) return <MySpinner key={0} text={'Loading...'} />;

  const data = pageDetails.page ? pageDetails.page.data : {};
  return (
    page && (
      <Fragment>
        <PageTitle title={data.title} desc="" />
        <PageContent data={data} />
      </Fragment>
    )
  );
};

export default connect(
  (state) => ({
    pageDetails: state.pageDetailsReducer,
    cart: state.cartReducer,
    liked: state.likedReducer,
  }),
  {
    loadPage,

    showToast,
    hideToast,
  },
)(withRouter(Page));
