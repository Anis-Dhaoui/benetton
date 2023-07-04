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




export const updateComputersRequest = () => ({
    type: ComputerActionsTypes.UPDATE_COMPUTER_REQUEST
})

export const updateComputersSuccess = (computer: IComputer) => ({
    type: ComputerActionsTypes.UPDATE_COMPUTER_SUCCESS,
    payload: computer
})

export const updateComputersFailure = (errMsg: string) => ({
    type: ComputerActionsTypes.UPDATE_COMPUTER_FAILURE,
    payload: errMsg
})




export const deleteComputersRequest = () => ({
    type: ComputerActionsTypes.DELETE_COMPUTER_REQUEST
})

export const deleteComputersSuccess = (deletedComputer: IComputer) => ({
    type: ComputerActionsTypes.DELETE_COMPUTER_SUCCESS,
    payload: deletedComputer
})

export const deleteComputersFailure = (errMsg: string) => ({
    type: ComputerActionsTypes.DELETE_COMPUTER_FAILURE,
    payload: errMsg
})




export const getSingleComputerRequest = () => ({
    type: ComputerActionsTypes.GET_SINGLE_COMPUTER_REQUEST
})

export const getSingleComputerSuccess = (computer: IComputer) => ({
    type: ComputerActionsTypes.GET_SINGLE_COMPUTER_SUCCESS,
    payload: computer
})

export const getSingleComputerFailure = (errMsg: string) => ({
    type: ComputerActionsTypes.GET_SINGLE_COMPUTER_FAILURE,
    payload: errMsg
})