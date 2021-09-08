import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../App.css';
import { useDispatch } from 'react-redux';
import { setApi } from '../actions/productActions';
import ExtractApi from '../../containers/HomeList';

const api = axios.create({
  baseURL: 'https://js-post-api.herokuapp.com/api/posts?',
});

export default function HomeBody() {
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
