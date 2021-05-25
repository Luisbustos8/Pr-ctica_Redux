import React from 'react';

import { Redirect } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getUI} from '../../store/selectors';


import Layout from '../../layout';
import NewAdvertForm from './NewAdvertForm';
import { advertsCreatedAction } from '../../store/actions';

function NewAdvertPage({ history }) {

  
  const dispatch = useDispatch;
  const {error} = useSelector(getUI);

  const handleSubmit = newAdvert => {
    dispatch(advertsCreatedAction(newAdvert)) 
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
