import React from 'react';
import {mount} from 'enzyme';
import { MemoryRouter, Route } from 'react-router';
import { SearchScreen } from '../../../Components/Search/SearchScreen';

import '@testing-library/jest-dom';

const history = {
    push: jest.fn()
}

test('Snapshot with default values', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/search']}>
            <Route path='/search' component={() => SearchScreen(history)} />
        </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').exists()).toBe(true);
});

test('Should to show Batman and the input with the value of Batman', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/search?q=batman']}>
            <Route path='/search' component={() => SearchScreen(history)} />
        </MemoryRouter>
    );

    expect(wrapper.find('input').prop('value')).toBe('batman');
    expect(wrapper.find('HeroeCard').exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
});

test('Should to show nothing if is not found the hero', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/search?q=batman123']}>
            <Route path='/search' component={() => SearchScreen(history)} />
        </MemoryRouter>
    );

    expect(wrapper.find('.col-7').html()).toBe('<div class="col-7"><h4>Results</h4><hr></div>');
});

test('Should to call push of the history()', () => {
    const history = {
        push: jest.fn()
    }

    const wrapper = mount(
        <MemoryRouter initialEntries={['/search?q=batman']}>
            <Route path='/search' component={() => <SearchScreen history={history} />} />
        </MemoryRouter>
    );

    wrapper.find('input').simulate('change',{
        target:{
            value: 'batman'
        }
    });
    wrapper.find('form').prop('onSubmit')({
        preventDefault(){}
    });
expect(history.push).toHaveBeenCalledWith(`?q=batman`);
});