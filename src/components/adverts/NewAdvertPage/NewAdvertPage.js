import React from 'react';

import { Redirect } from 'react-router-dom';
import {useDispatch} from 'react-redux';

import { createAdvert } from '../../../api/adverts';
import usePromise from '../../../hooks/usePromise';
import Layout from '../../layout';
import NewAdvertForm from './NewAdvertForm';
import { advertsCreated } from '../../store/actions';

function NewAdvertPage({ history }) {
  const { isPending: isLoading, error, execute } = usePromise(null);

  const dispatch = useDispatch;

  const handleSubmit = async newAdvert => {
    const advertNew = await execute(createAdvert(newAdvert))
    dispatch(advertsCreated({...advertNew, user:{}}))
    .then(({ id }) =>
      history.push(`/adverts/${id}`)
    );
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


export default NewAdvertPage;
