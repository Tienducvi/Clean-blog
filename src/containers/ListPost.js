/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import {
  Link,
  useLocation,
} from 'react-router-dom';
import axios from 'axios';
import { apiLink } from '../redux/api/linkApi';

export default function ListData() {
  const { search } = useLocation();
  const searchParam = new URLSearchParams(search);
  const page = searchParam.get('page');
  // xong phan lay page number tu link
  // lay link api
  function pageNumber(pageNum) {
    let result;
    // eslint-disable-next-line no-empty
    if (pageNum === null) {
      result = 1;
    } else {
      result = pageNum;
    }
    return result;
  }
  const [eachpage, setEachpage] = useState([]);
  // link api after click button
  const pageData = `${apiLink.apiLink}?_limit=10&_page=${pageNumber(page)}`;
  // get data to state "eachpage"
  useEffect(() => {
    const apiLimit = axios.create({
      baseURL: `${pageData}`,
    });
    apiLimit.get('/').then((res) => {
      const { data } = res?.data;
      setEachpage(data);
    });
  }, [pageData]);
  // render the new api data
  const renderList = eachpage.map((apiData) => {
    const {
      id, title, author, createdAt,
    } = apiData;
    // setting the time data from api
    const fullDate = (new Date({ createdAt }.createdAt));
    const monthNum = fullDate.getMonth();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[monthNum];
    const date = fullDate.getDate();
    const year = fullDate.getUTCFullYear();

    return (
      <>
        <div key={id} className="post-preview">
          <Link to={`/post/${id}`}><h2 className="post-title">{title}</h2></Link>
          <p className="post-meta">
            Posted by
            {' '}
            {author}
            {' '}
            on
            {' '}
            {month}
            {' '}
            {date}
            {', '}
            {year}
          </p>
          <hr className="my-4" />
        </div>
      </>
    );
  });
  return renderList;
}
