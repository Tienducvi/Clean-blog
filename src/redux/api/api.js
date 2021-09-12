import React, { useEffect, useState } from 'react';
import '../../App.css';
import { useDispatch } from 'react-redux';
import { setApi } from '../actions/productActions';
import ExtractApi from '../../containers/HomeList';
import { api } from './apiCreate';

export default function HomeBody() {
  // eslint-disable-next-line no-console
  const [subjects, setSubjects] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    api.get('/').then((res) => {
      setSubjects(res?.data);
    });
  }, []);
  dispatch(setApi(subjects));
  return (
    <>
      <ExtractApi />
    </>
  );
}
