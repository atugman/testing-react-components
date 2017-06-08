import React from 'react';
import ReactDOM from 'react-dom';
import GuessSection from './guess-section';
import {shallow, mount} from 'enzyme';

describe('<GuessSection />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessSection />);
    });

    it('Provides feedback', () => {
        const feedback = " ";
        const wrapper = shallow(<GuessSection feedback={feedback} />);
        expect(wrapper.contains(feedback)).toEqual(true);
    });
});
