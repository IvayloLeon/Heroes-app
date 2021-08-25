import React from 'react'
import { DcScreen } from '../../../Components/Dc/DcScreen';
import {shallow} from 'enzyme';
import '@testing-library/jest-dom';

test('should ', () => {
    const wrapper = shallow(<DcScreen />);

    expect(wrapper).toMatchSnapshot();
});