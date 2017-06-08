import React from 'react';
import ReactDOM from 'react-dom';
import GuessCount from './guess-count';
import {shallow, mount} from 'enzyme';


describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Renders the correct guess count', () => {
        const value = 5;
        const wrapper = shallow(<GuessCount count={value} />);
        expect(wrapper.text()).toEqual(`Guess #${value}!`);
    });
});
