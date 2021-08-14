import React, { ReactNode } from 'react';
import { IPost, IPostImage } from 'assets/types';

interface IPostImages {
  images: IPost['Images'];
}

const PostImages: React.FC<IPostImages> = ({ images }) => {
  return <div>구현중...</div>;
};

export default PostImages;
