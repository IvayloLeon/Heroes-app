import React from 'react';
import { authReducer } from '../../auth/authReducer';
import {shallow} from 'enzyme';
import { types } from '../../types/types';
import '@testing-library/jest-dom';

test('Should to return the default state', () => {
    const data = authReducer({logged: false}, {});
    
    expect(data).toEqual({logged: false});
});

test('Should to authentify and put the userName', () => {
    const state = {
        name: 'Ivaylo',
        logged: true
    }

    const action ={
        type: types.login,
        payload: state
    }
    
    const data = authReducer(state, action);

    expect(data).toEqual(state);
});

test('Should to delete the userName and put the logged in false', () => {
    const action ={
        type: types.logout
    }
    
    const data = authReducer({}, action);

    expect(data).toEqual({logged: false});
});