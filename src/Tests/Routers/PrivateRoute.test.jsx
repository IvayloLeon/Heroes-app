import React from 'react';
import { PrivateRoute } from '../../Routers/PrivateRoute';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom';

const props = {
    location: {
        pathname: '/marvel'
    }
}

Storage.prototype.setItem = jest.fn();

test('Should to show the component if is authenticated and keep Localstorage', () => {
    

    const wrapper = mount(
        <MemoryRouter>
            <PrivateRoute
                isAuthenticated={true}
                component={() => <span>Hola mundo desde mi ordenador con Windows!!</span>}
                {...props}
            />
        </MemoryRouter>)

    expect(wrapper.find('span').exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
});

test('Should to block the component if is not authenticated', () => {
    const wrapper = mount(
        <MemoryRouter>
            <PrivateRoute
                isAuthenticated={false}
                component={() => <span>Hola mundo desde mi ordenador con Windows!!</span>}
                {...props}
            />
        </MemoryRouter>)

    expect(wrapper.find('span').exists()).toBe(false);
});