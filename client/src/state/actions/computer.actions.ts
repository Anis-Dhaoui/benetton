import { ComputerActionsTypes } from "../actions-types/computer.action-types";

interface computerLoading{
    type: ComputerActionsTypes.COMPUTER_LOADING
}

interface computerSuccess{
    type: ComputerActionsTypes.COMPUTER_SUCCESS,
    payload: IComputer[] // will be IComputer
}

interface computerFailed{
    type: ComputerActionsTypes.COMPUTER_FAILED,
    payload: string
}

export type ACTIONS = computerLoading | computerSuccess | computerFailed;