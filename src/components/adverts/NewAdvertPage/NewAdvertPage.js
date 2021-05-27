import React from 'react';
import T from 'prop-types';
import { Redirect } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import { createAdvert } from '../../../api/adverts';
import usePromise from '../../../hooks/usePromise';
import Layout from '../../layout';
import NewAdvertForm from './NewAdvertForm';
import { advertsCreatedAction } from '../../store/actions';
import { getAdvertDetail } from '../../store/selectors';

function NewAdvertPage({ history }) {
  const { isPending: isLoading, error,  } = usePromise(null);

  const dispatch = useDispatch();
  const advertsDetail = useSelector(getAdvertDetail);

  const handleSubmit = newAdvert => {
    dispatch(advertsCreatedAction(newAdvert));
  };

  if (error?.statusCode === 401) {
    return <Redirect to="/login" />;
  }

  return (
    <Layout>
      <NewAdvertForm onSubmit={handleSubmit} />
    </Layout>
  );
}

NewAdvertPage.propTypes = {
  history: T.shape({
    push: T.func.isRequired,
  }).isRequired,
};

export default NewAdvertPage;