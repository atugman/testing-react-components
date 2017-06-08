import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game';
import {shallow, mount} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
});
it('Provides correct feedback', () => {
  const wrapper = shallow(<Game />);
  wrapper.setState({
    correctAnswer: 1
  })
  wrapper.instance().guess(95);
  expect(wrapper.state('guesses')).toEqual([95]);
  expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

  wrapper.instance().guess(50);
  expect(wrapper.state('guesses')).toEqual([95, 50]);
  expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

  wrapper.instance().guess(35);
  expect(wrapper.state('guesses')).toEqual([95, 50, 35]);
  expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

  wrapper.instance().guess(25);
  expect(wrapper.state('guesses')).toEqual([95, 50, 35, 25]);
  expect(wrapper.state('feedback')).toEqual('You\'re Warm');

  wrapper.instance().guess(1);
  expect(wrapper.state('guesses')).toEqual([95, 50, 35, 25, 1]);
  expect(wrapper.state('feedback')).toEqual('You got it!');
});
