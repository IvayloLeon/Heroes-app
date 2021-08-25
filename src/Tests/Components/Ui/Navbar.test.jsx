import React from 'react'
import { Navbar } from '../../../Components/Ui/Navbar'
import { AuthContext } from '../../../auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';
import {mount} from 'enzyme';

import '@testing-library/jest-dom';

const data = {
    dispatch: jest.fn(),
    user: {
        name: 'Ivaylo'
    }
}

const wrapper = mount(
    <AuthContext.Provider value={data}>
        <MemoryRouter>
            <Navbar />    
        </MemoryRouter>
    </AuthContext.Provider>
    
);

test('Snapshot and testing if the context was applied', () => {
    expect(wrapper.find('.text-info').text().trim()).toBe(data.user.name);
    expect(wrapper).toMatchSnapshot();
});

test('Should to call the logout and use the history', () => {
    wrapper.find('button').prop('onClick')();

    expect(data.dispatch).toHaveBeenCalled();
});