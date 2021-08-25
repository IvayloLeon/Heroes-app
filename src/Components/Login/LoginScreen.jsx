import React, { useContext, useState } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    const [inputValue, setInputValue] = useState('');

    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        const data = {
            name: inputValue
        }

        const action = {
            type: types.login,
            payload: data
        }

        dispatch(action);

        history.replace(lastPath);
    }

    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr />

            <input 
                type="text" 
                className='form-control'
                placeholder='Ingrese aquí su nombre'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}    
            />

            <br />
            <br />

            <button
                className='btn btn-primary'
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
