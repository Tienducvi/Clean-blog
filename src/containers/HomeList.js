import React from 'react';
import { useSelector } from 'react-redux';

function ExtractApi() {
  const apiDatas = useSelector((state) => state.api.api);
  const renderList = apiDatas.map((apiData) => {
    const {
      id, title, author, createdAt,
    } = apiData;

    return (
      <>
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div key={id} className="post-preview">
                <h2 className="post-title">{title}</h2>
                <h3 className="post-subtitle">{author}</h3>
                <p className="post-meta">
                  Posted by
                  {' '}
                  {author}
                  {' '}
                  on
                  {' '}
                  {createdAt}
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
