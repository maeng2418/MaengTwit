/** @jsxImportSource @emotion/react */
import { IPost } from 'assets/types';
import React, { useState } from 'react';
import Slick from 'react-slick';
import { Global } from '@emotion/react';
import { CloseOutlined } from '@ant-design/icons';
import {
  closeBtn,
  globalStyle,
  headerStyle,
  imgWrapperStyle,
  indicatorStyle,
  overlayStyle,
  slickWrapper,
} from './styles';

interface IImageZoom {
  images: IPost['Images'];
  onClose: () => void;
}

const ImagesZoom: React.FC<IImageZoom> = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  return (
    <div css={overlayStyle}>
      <header css={headerStyle}>
        <h1>상세 이미지</h1>
        <CloseOutlined onClick={onClose} css={closeBtn}>
          X
        </CloseOutlined>
      </header>
      <div css={slickWrapper}>
        <div>
          <Global styles={globalStyle} />
          <Slick
            initialSlide={0}
            afterChange={(slide: number) => setCurrentSlide(slide)}
            infinite
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {images.map((v) => (
              <div css={imgWrapperStyle} key={v.src}>
                <img src={v.src} alt={v.src} />
              </div>
            ))}
          </Slick>
          <div css={indicatorStyle}>
            <div>
              {currentSlide + 1} / {images.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesZoom;
