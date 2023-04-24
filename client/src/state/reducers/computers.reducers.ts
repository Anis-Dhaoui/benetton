import { ACTIONS } from './../actions/computer.actions';
import { ComputerActionsTypes } from "../actions-types/computer.action-types"

interface STATE {
    loading: boolean,
    computers?: IComputer[],
    error?: string | null
}

const initialState = {
    loading: false,
    computers: undefined,
    error: null
}

export const ComputerRed = (state: STATE = initialState, action: ACTIONS): STATE => {
    switch (action.type) {
        case ComputerActionsTypes.COMPUTER_LOADING :
            return {
                loading: true
            }

        case ComputerActionsTypes.COMPUTER_SUCCESS :
            return {
                loading: false,
                computers: action.payload
            }

        case ComputerActionsTypes.COMPUTER_FAILED :
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}