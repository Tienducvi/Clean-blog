import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const api = axios.create({
  baseURL: 'https://js-post-api.herokuapp.com/api/posts?_litmit=10&_page=1%C6%B0',
});

export default function App() {
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    api.get('/').then((res) => {
      const { data } = res.data;
      setSubjects(data);
    });
  }, []);
  return (
    <>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            {subjects.map((subject) => (
              <div key={subject.id} className="post-preview">
                <h2 className="post-title">{subject.title}</h2>
                <h3 className="post-subtitle">{subject.author}</h3>
                <p className="post-meta">
                  Posted by
                  {' '}
                  {subject.author}
                  {' '}
                  on
                  {' '}
                  {subject.createdAt}
                </p>
                <hr className="my-4" />
              </div>
            ))}
            <div className="d-flex justify-content-end mb-4">
              <a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
