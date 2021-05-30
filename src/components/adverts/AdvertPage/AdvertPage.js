import React from 'react';
import { Redirect, useParams} from 'react-router-dom';
import {connect, useDispatch, useSelector} from 'react-redux';

import Layout from '../../layout';
import AdvertDetail from './AdvertDetail';
import {advertsDetailAction, advertsDeletedAction} from '../../store/actions';
import { getAdvertDetail, getUI } from '../../store/selectors';


function AdvertPage({...props}) {
  const { advertId } = useParams();

  
  const dispatch = useDispatch();
  const error = useSelector(getUI);


  const adverts = useSelector((state)=>getAdvertDetail(state, advertId))
  
 
  React.useEffect(() => {
    dispatch(advertsDetailAction(advertId));
  }, [advertId]);

  const handleDelete = () => {
    dispatch(advertsDeletedAction(advertId));
  };

  if (error?.statusCode === 401) {
    return <Redirect to="/login" />;
  }

  if (error?.statusCode === 404) {
    return <Redirect to="/404" />;
  }

  return (
    <Layout>
      {advertId && <AdvertDetail {...adverts} onDelete={handleDelete} />}
    </Layout>
  );
}



export default AdvertPage;
