import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {advertsTagsAction} from '../../store/actions';
import { CheckboxGroup } from '../../shared';
import {getAdvertsTags} from '../../store/selectors';

function SelectTags(props) {
   

   
  
   const dispatch = useDispatch()
   const tagsList = useSelector(getAdvertsTags)

  React.useEffect(() => {
    dispatch(advertsTagsAction());
  }, []);

  return <CheckboxGroup options={tagsList} {...props} />;
}

export default SelectTags;
