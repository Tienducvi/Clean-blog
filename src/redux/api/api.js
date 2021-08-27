import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../App.css';
import { useDispatch } from 'react-redux';
import { setApi } from '../actions/productActions';
import ExtractApi from '../../containers/HomeList';

const api = axios.create({
  baseURL: 'https://js-post-api.herokuapp.com/api/posts?_litmit=10&_page=1%C6%B0',
});

export default function HomeBody() {
  const [subjects, setSubjects] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    api.get('/').then((res) => {
      const { data } = res.data;
      setSubjects(data);
    });
  }, []);
  dispatch(setApi(subjects));
  return (
    <>
      <ExtractApi />
      <div className="d-flex justify-content-end mb-4">
        <a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a>
      </div>
    </>
  );
}
