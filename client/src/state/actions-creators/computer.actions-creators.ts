import axios from 'axios';
import { Dispatch } from 'redux';
import { ACTIONS } from '../actions/computer.actions';
import { ComputerActionsTypes } from '../actions-types/computer.action-types';

export const fetchComputers = () => {

    return async (dispatch: Dispatch<ACTIONS>) => {
        dispatch({
            type: ComputerActionsTypes.COMPUTER_LOADING
        });

        try {
            const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/computers`);

            dispatch({
                type: ComputerActionsTypes.COMPUTER_SUCCESS,
                payload: data
            });

        } catch (err: any) {
            dispatch({
                type: ComputerActionsTypes.COMPUTER_FAILED,
                payload: err.message
            });
        }
    }
}