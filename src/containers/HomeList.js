/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  Link,
  useLocation,
} from 'react-router-dom';
import ListData from './ListPost';

function ExtractApi() {
  const [page, setPage] = useState(2);
  const { search } = useLocation();
  const searchParam = new URLSearchParams(search);
  const currentPage = searchParam.get('page');
  function setButtonPrevious() {
    const previousButton = document.querySelector('.new-post');
    if (currentPage === null || currentPage === '1') {
      previousButton?.classList.add('invisible-button');
    } else {
      previousButton?.classList.remove('invisible-button');
    }
  }
  function setButtonOlder() {
    const olderButton = document.querySelector('.older-post');
    if (currentPage > '4') {
      olderButton?.classList.add('invisible-button');
    } else {
      olderButton?.classList.remove('invisible-button');
    }
  }
  return (
    <>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <ListData />
            <div className="post-button">
              <div className="d-flex justify-content-end mb-4 new-post" role="button" tabIndex="0" aria-hidden="true" onClick={() => setPage(page - 1)}>
                <Link className="btn btn-primary text-uppercase" to={`/?page=${page - 1}`}>← New Posts</Link>
              </div>
              {setButtonPrevious()}
              <div className="d-flex justify-content-end mb-4 older-post" role="button" tabIndex="0" aria-hidden="true" onClick={() => setPage(page + 1)}>
                <Link className="btn btn-primary text-uppercase" to={`/?page=${page}`}>Older Posts →</Link>
              </div>
              {setButtonOlder()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExtractApi;
