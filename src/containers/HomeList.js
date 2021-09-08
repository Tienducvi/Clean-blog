/* eslint-disable no-console */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Link,
  useLocation,
} from 'react-router-dom';

function ListData() {
  const { search } = useLocation();
  const searchParam = new URLSearchParams(search);
  const name = searchParam.get('name');
  console.log(name);
  const apiDatas = useSelector((state) => state.api.api);
  const renderList = apiDatas.slice(0, 4).map((apiData) => {
    const {
      id, title, author, createdAt,
    } = apiData;
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
function ExtractApi() {
  const [page, setPage] = useState(1);
  return (
    <>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <ListData />
            <div className="post-button">
              <div className="d-flex justify-content-end mb-4 new-post" role="button" tabIndex="0" aria-hidden="true">
                <a className="btn btn-primary text-uppercase" href="#!">← New Posts</a>
              </div>
              <div className="d-flex justify-content-end mb-4 older-post" role="button" tabIndex="0" aria-hidden="true" onClick={() => setPage(page + 1)}>
                <Link className="btn btn-primary text-uppercase" to={`/?name=${page}`}>Older Posts →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExtractApi;
