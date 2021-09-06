import React from 'react';
import { useParams } from 'react-router';

export default function Post(data) {
  const { postId } = useParams();
  const post = ({ data }).find((p) => p.id === postId);
  let PostDetail;
  if (postId) {
    PostDetail = (
      <div>
        <h1>{post.title}</h1>
      </div>
    );
  } else {
    PostDetail = <h2>Sorry post doesnt exist</h2>;
  }
  return (
    <>
      <div>{PostDetail}</div>
    </>
  );
}
