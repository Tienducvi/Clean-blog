import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { detailInfo } from '../redux/actions/productActions';
import HomeHeader from './Header';
import FooterHome from './Footer';

const api = axios.create({
  baseURL: 'https://js-post-api.herokuapp.com/api/posts?_litmit=10&_page=1%C6%B0',
});

export default function PostDetail() {
  // eslint-disable-next-line prefer-const
  const { postId } = useParams();
  // // eslint-disable-next-line no-console
  // console.log(postId);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    api.get('/').then((res) => {
      // eslint-disable-next-line no-console
      console.log(res);
      const { data } = res.data;
      setPosts(data);
      // // eslint-disable-next-line no-console
      // console.log(`data: ${res.data}`);
    });
  }, []);
  const post = posts.find((pId) => pId.id === postId);
  dispatch(detailInfo(post));
  // const postData = useSelector((state) => state.post.post);
  // // eslint-disable-next-line no-console
  // console.log(postData);
  return (
    <>
      <HomeHeader />
      <div>
        <article className="mb-4">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <p>{}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
      <FooterHome />
    </>
  );
}
