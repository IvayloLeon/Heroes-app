import React from 'react';
import {mount} from 'enzyme';
import { AppRouter } from '../../Routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

import '@testing-library/jest-dom';

test('Should to show the login if it is not authenticated ', () => {

    const values = {
        user:{
            logged: false
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={values} >
            <AppRouter />
        </AuthContext.Provider>
    );

    expect(wrapper.find('h1').text()).toBe('Login')
});