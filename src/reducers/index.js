import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments';
//combineReducers는 객체 안의 모든 리듀서들을 실행해서 하나의 상태 객체로 만드는 함수이다.
export default combineReducers({
	comments: commentsReducer,
});
