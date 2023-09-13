import { toast } from 'react-toastify';
import { loginActionsTypes } from './../actions-types/login.actions-types';
import { ACTION } from '../actions/login.actions';
import axios from 'axios';
import { Dispatch } from 'redux';

//Test purpose
// const loginForm = {
//     email: 'anis.dhaoui@gmyail.com',
//     password: 'AAAbbb123',
// };
export const handleLogin = (inputs: ILoginReq) => {
    const baseUrl = process.env.REACT_APP_BASE_URL;

    return async (dispatch: Dispatch<ACTION>) => {
        dispatch({
            type: loginActionsTypes.LOGIN_LOADING
        });
        const toastId = toast.loading('Please wait...')
        try {
            const { data } = await axios.post<ILoginRes>(`${baseUrl}/login`, inputs);
            dispatch({
                type: loginActionsTypes.LOGIN_SUCCESS,
                payload: data
            });
            localStorage.setItem('loggedUser', JSON.stringify(data));
            toast.update(toastId, { render: "Let's get in", type: "success", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true });
            setTimeout(() => {
                window.location.href = window.location.origin
            }, 2002);
        } catch (err: any) {
            dispatch({
                type: loginActionsTypes.LOGIN_FAILED,
                payload: err.response.data
            });
            toast.update(toastId, { render: err.response.data, type: "error", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true });
        }
    }
}

export const handleLogout = () => {
    localStorage.removeItem('loggedUser');
    toast.loading('Logging out...', { position: 'top-center', type: 'info' })
    setTimeout(() => {
        window.location.href = window.location.origin + '/login'
    }, 1500);
}