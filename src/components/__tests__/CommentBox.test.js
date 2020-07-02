import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';
// mount -- full DOM

let wrapped;
//모든 expect 실행 전에
beforeEach(() => {
	wrapped = mount(
		<Root>
			<CommentBox />
		</Root>
	);
});
afterEach(() => {
	wrapped.unmount();
});
// 1. Shows a text area and a button
it('has a text area and buttons', () => {
	expect(wrapped.find('textarea').length).toEqual(1);
	expect(wrapped.find('button').length).toEqual(2);
});
describe('the text area', () => {
	beforeEach(() => {
		wrapped.find('textarea').simulate('change', {
			target: { value: 'new comment' },
		});
		wrapped.update();
	});

	it('has a text area that users can type in', () => {
		//forcing component updates
		//비동기처리가 일어나기 때문에 밑에서 Assertion 할 때 오류를 방지해주기 위함

		//make sure that textarea receives the correct value prop
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

		//뒤에 오는 mock object는 앞에오는 이벤트에 합쳐지게 됨
		//즉 change(event).target.value가 수정되는 것
		//이로인해서 이벤트가 발생하면 value가 수정되는 것을 verify 할 수 있다.
		//enzyme- fullDOM - simulate, we can 'simulate' a given event
		//event는 on 빼고 설정
	});
	it('has a empty textarea when submitted', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
		wrapped.find('form').simulate('submit');
		wrapped.update();
		expect(wrapped.find('textarea').prop('value')).toEqual('');
	});
});
