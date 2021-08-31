import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ExtractApi() {
  const apiDatas = useSelector((state) => state.api.api);
  const renderList = apiDatas.map((apiData) => {
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
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div key={id} className="post-preview">
                <Link to="/sample"><h2 className="post-title">{title}</h2></Link>
                <h3 className="post-subtitle">{author}</h3>
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
            </div>
          </div>
        </div>
      </>
    );
  });
  return renderList;
}

export default ExtractApi;
