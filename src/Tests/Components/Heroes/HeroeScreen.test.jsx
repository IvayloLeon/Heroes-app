import React from 'react';
import { HeroeScreen } from '../../../Components/Heroes/HeroeScreen';
import {mount} from 'enzyme';
import { MemoryRouter, Route } from 'react-router';

import '@testing-library/jest-dom';

const historyMock = {
    lenght: 10,
    push: jest.fn(),
    goBack: jest.fn(),
    match: jest.fn()
}

test('Should to show Redirect component if are not components on the URL', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero']}>
            <HeroeScreen history={historyMock} />
        </MemoryRouter>
    );
    
    expect(wrapper.find('Redirect').exists()).toBe(true);    
});

test('Should to show a hero if param exists and its finded', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero/dc-batman']}>
            <Route path='/hero/:heroeId' component={HeroeScreen} />
        </MemoryRouter>
    );

    expect(wrapper.find('h3').text()).toBe('Batman');
    expect(wrapper.find('.row').exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
});

test('Should to return to the back screen with push', () => {
    const history = {
        length: 1,
        push: jest.fn(),
        goBack: jest.fn(),
        match: jest.fn()
    };

    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero/dc-batman']}>
            <Route 
                path='/hero/:heroeId' 
                component={() => <HeroeScreen history={history} /> } 
            />
        </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();
    expect(history.push).toHaveBeenCalled();
    
});


test('Should to return to the back screen with goBack', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero/dc-batman']}>
            <Route 
                path='/hero/:heroeId' 
                component={() => <HeroeScreen history={historyMock} /> } 
            />
        </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')();
    expect(historyMock.push).toHaveBeenCalledTimes(0);
    expect(historyMock.goBack).toHaveBeenCalled();
    
});