import React, { useEffect, useState, useRef, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';

import MySpinner from '../components/MySpinner';
import PageTitle from '../components/PageTitle/PageTitle';
import PageContent from '../components/Content/PageContent';

import { loadArticle } from '../store/actions/articleDetails';
import { showToast, hideToast } from '../store/actions/toast';

const Article = ({
  articleDetails,
  loadArticle,
  match,
  liked,
  showToast,
  hideToast,
}) => {
  const { article, isLoading, error } = articleDetails;

  useEffect(() => {
    loadArticle(match.params.id);
  }, []);

  if (error) return <Redirect to={'/error'} />;
  if (isLoading) return <MySpinner key={0} text={'Loading...'} />;

  // console.log(article);
  return (
    article && (
      <Fragment>
        <PageTitle title={article.data.title} desc="" />
        <PageContent data={article.data} />
      </Fragment>
    )
  );
};

export default connect(
  (state) => ({
    articleDetails: state.articleDetailsReducer,
    cart: state.cartReducer,
    liked: state.likedReducer,
  }),
  {
    loadArticle,

    showToast,
    hideToast,
  },
)(withRouter(Article));
