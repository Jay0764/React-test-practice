import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
//beforeEach => Jest에서 제공하는 함수
// 이안에 들어있는 내용들은 각각의 테스트가 시행되기 이전에 실행
let wrapped; //dealing with scope issue
beforeEach(() => {
	wrapped = shallow(<App />);
});

it('shows a comment box', () => {
	// const wrapped = shallow(<App />); //'wrapped' indicates that the object we got back from this is a wrapped version of our App
	//find returns an array which contains the
	//if the length is just one than one CommentBox exists but zero means no component with the name 'CommentBox'
	expect(wrapped.find(CommentBox).length).toEqual(1);
});
it('shows a CommentList', () => {
	// const wrapped = shallow(<App />);
	expect(wrapped.find(CommentList).length).toEqual(1);
});
