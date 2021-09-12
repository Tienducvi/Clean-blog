/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HomeHeader from './Header';
import FooterHome from './Footer';
import { apiLink } from '../redux/api/linkApi';

export default function PostDetail() {
  // eslint-disable-next-line prefer-const
  const { postId } = useParams();
  const apiPost = `${apiLink.apiLink}/${postId}`;
  const api = axios.create({
    baseURL: `${apiPost}`,
  });
  const [post, setPost] = useState([]);
  useEffect(() => {
    api.get('/').then((res) => {
      console.log(res);
      setPost(res.data);
    });
  }, []);
  // eslint-disable-next-line no-console
  console.log(post);
  return (
    <>
      <HomeHeader bigTitle={post?.title} smallTitle={post?.author} picture={post?.imageUrl} />
      <div>
        <article className="mb-4">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <p>{post?.description}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
      <FooterHome />
    </>
  );
}
