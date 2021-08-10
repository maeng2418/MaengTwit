import { combineReducers } from 'redux';
import user from './user';
import { HYDRATE } from 'next-redux-wrapper';

export default combineReducers({
  // 서버쪽에서 실행된 리덕스의 결과물이 프론트에서는 HYDRATE라는 액션 이름 아래에 데이터로 전달
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return Object.assign(state, action.payload);
      default:
        return state;
    }
  },
  user,
});
