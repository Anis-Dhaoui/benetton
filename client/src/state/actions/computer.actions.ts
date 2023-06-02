import { ComputerActionsTypes } from "../actions-types/computer.action-types";

export const fetchComputersRequest = () => ({
    type: ComputerActionsTypes.FETCH_COMPUTERS_REQUEST
})

export const fetchComputersSuccess = (computers: IComputer[]) => ({
    type: ComputerActionsTypes.FETCH_COMPUTERS_SUCCESS,
    payload: computers
})

export const fetchComputersFailure = (errMsg: string) => ({
    type: ComputerActionsTypes.FETCH_COMPUTERS_FAILURE,
    payload: errMsg
})


export const createComputersRequest = () => ({
    type: ComputerActionsTypes.CREATE_COMPUTER_REQUEST
})

export const createComputersSuccess = (computer: IComputer) => ({
    type: ComputerActionsTypes.CREATE_COMPUTER_SUCCESS,
    payload: computer
})

export const createComputersFailure = (errMsg: string) => ({
    type: ComputerActionsTypes.CREATE_COMPUTER_FAILURE,
    payload: errMsg
})