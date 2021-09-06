import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  // useRouteMatch,
} from 'react-router-dom';
import Post from './Post';

function ExtractApi() {
  // const { path, url } = useRouteMatch();
  // // eslint-disable-next-line no-console
  // console.log(url);
  // // eslint-disable-next-line no-console
  // console.log(useRouteMatch());
  const [post, setPost] = useState(4);
  const apiDatas = useSelector((state) => state.api.api);
  const renderList = apiDatas.slice(0, post).map((apiData) => {
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
                <Link to={`/${id}`}><h2 className="post-title">{title}</h2></Link>
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

        <BrowserRouter>
          <div>
            <Switch>
              <Route path={`/:${id}`}>
                <Post data={apiDatas} />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </>
    );
  });
  return (
    <>
      <div>{renderList}</div>
      <button className="d-flex justify-content-end mb-4" type="button" onClick={() => setPost(post + 4)}>
        <a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a>
      </button>
    </>
  );
}

export default ExtractApi;
