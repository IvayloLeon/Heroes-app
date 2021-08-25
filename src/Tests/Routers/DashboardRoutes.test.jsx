import React from 'react'
import { DashboardRoutes } from '../../Routers/DashboardRoutes'
import {mount} from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';

import '@testing-library/jest-dom';

test('should ', () => {
    const data = {
        user:{
            logged: true,
            name: 'Ivaylo'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={data}>
            <MemoryRouter>
                <DashboardRoutes />
            </MemoryRouter>
        </AuthContext.Provider>
    );

    expect(wrapper.find('.text-info').text()).toEqual(data.user.name);
    expect(wrapper).toMatchSnapshot();
});