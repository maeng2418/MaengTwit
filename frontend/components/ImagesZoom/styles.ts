import { css } from '@emotion/react';

export const overlayStyle = css`
  position: fixed;
  z-index: 5000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const headerStyle = css`
  height: 44px;
  background: white;
  position: relative;
  padding: 0;
  text-align: center;

  & > h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }
`;

export const closeBtn = css`
  position: absolute;
  right: 0;
  top: 0;
  padding: 15px;
  line-height: 14px;
  cursor: pointer;
`;

export const slickWrapper = css`
  height: calc(100% - 44px);
  background: #090909;
`;

export const imgWrapperStyle = css`
  padding: 32px;
  text-align: center;

  & img {
    margin: 0 auto;
    max-height: 750px;
  }
`;

export const indicatorStyle = css`
  text-align: center;

  & > div {
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`;

export const globalStyle = css`
  .slick-slide {
    display: inline-block;
  }
`;
