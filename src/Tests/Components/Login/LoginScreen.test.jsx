import React from 'react';
import { LoginScreen } from '../../../Components/Login/LoginScreen';
import {mount} from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';

import '@testing-library/jest-dom';

const history = {
    replace: jest.fn(),
}

const data = {
    dispatch: jest.fn()
}

test('Should to show (Snapshot) ', () => {
    const wrapper = mount(
        <MemoryRouter>
            <AuthContext.Provider value={data}>
                <LoginScreen history={history} />
            </AuthContext.Provider>
        </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
});

test('Should to do the dispatch and the navigation', () => {
    const wrapper = mount(
        <MemoryRouter>
            <AuthContext.Provider value={data}>
                <LoginScreen history={history} />
            </AuthContext.Provider>
        </MemoryRouter>
    );

    wrapper.find('.btn').simulate('click');
    expect(data.dispatch).toHaveBeenCalled();
    expect(history.replace).toHaveBeenCalled();
    expect(history.replace).toHaveBeenCalledWith('/');

    localStorage.setItem('lastPath', '/dc');
    wrapper.find('.btn').simulate('click');
    expect(history.replace).toHaveBeenCalledWith('/dc');

});