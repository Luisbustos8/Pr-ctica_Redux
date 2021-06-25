import React from 'react';
import T from 'prop-types';
import { Redirect } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';


import usePromise from '../../../hooks/usePromise';
import Layout from '../../layout';
import NewAdvertForm from './NewAdvertForm';
import { advertsCreatedAction } from '../../store/actions';
import {  getUI } from '../../store/selectors';

function NewAdvertPage({ history }) {
 

  const dispatch = useDispatch();
  const error = useSelector(getUI)


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