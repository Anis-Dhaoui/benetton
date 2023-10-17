import axios from 'axios';
import { Dispatch } from 'redux';
import * as ACTIONS from '../actions/password.actions';
import { toast } from 'react-toastify';
import { UseFormReset } from 'react-hook-form';
import { axiosInstance } from './axiosHeaderInstance';

export const updatePassword = (data: IPassword, id: string | undefined, reset?: any) => {
    return (dispatch: Dispatch) => {
        dispatch(ACTIONS.updatePasswordRequest());
        const toastId = toast.loading('Please wait...')

        axiosInstance
            .put(`${process.env.REACT_APP_BASE_URL}/users/${id}/updatepassword`, data)
            .then((res) => {
                dispatch(ACTIONS.updatePasswordSuccess(res.data));
                toast.update(toastId, { render: res.data.message, type: "success", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true, icon: true });
                reset();
            })
            .catch((err) => {
                dispatch(ACTIONS.updatePasswordFailure(err.response.data.message));
                toast.update(toastId, { render: err.response.data.message, type: "error", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true });
            })
    }
}


export const resetPassword = (data: IPassword, id: string | undefined) => {
    return (dispatch: Dispatch) => {
        dispatch(ACTIONS.updatePasswordRequest());
        const toastId = toast.loading('Please wait...')

        axiosInstance
            .put(`${process.env.REACT_APP_BASE_URL}/users/${id}/resetpassword`, data)
            .then((res) => {
                dispatch(ACTIONS.updatePasswordSuccess(res.data));
                toast.update(toastId, { render: res.data.message, type: "success", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true, icon: true });
            })
            .catch((err) => {
                dispatch(ACTIONS.updatePasswordFailure(err.response.data.message));
                toast.update(toastId, { render: err.response.data.message, type: "error", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true });
            })
    }
}