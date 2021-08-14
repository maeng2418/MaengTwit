import { createSlice } from '@reduxjs/toolkit';
import dummyData from 'assets/dummyData.json';
import { IPost, IPostImage } from 'assets/types';

const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: 'Maeng Kim',
      },
      content: '첫 번째 게시글',
      Images: [
        {
          src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        },
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        },
        {
          src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'nero',
          },
          content: '우와 개정판이 나왔군요~',
        },
        {
          User: {
            nickname: 'hero',
          },
          content: '얼른 사고싶어요~',
        },
      ],
    },
  ] as IPost[],
  imagePaths: [] as IPostImage[],
  postAdded: false as boolean,
};

// Slice
const slice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {
    addPost: (state, { payload }) => {
      (state.mainPosts = [...state.mainPosts, dummyData.post as IPost]), (state.postAdded = true);
    },
  },
});

export const { addPost } = slice.actions;

export default slice.reducer;
