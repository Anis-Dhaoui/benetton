import { ComputerActionsTypes } from "../actions-types/computer.action-types"

interface STATE {
    loading: boolean,
    computers?: IComputer[],
    error?: string | null,

    creating?: boolean,
    createdComputer?: any,
    createError?: string | null
}

const initialState = {
    loading: false,
    computers: undefined,
    error: null,

    creating: false,
    createdComputer: undefined,
    createError: null
}

export const ComputerRed = (state: STATE = initialState, action: any): STATE => {
    switch (action.type) {
        case ComputerActionsTypes.FETCH_COMPUTERS_REQUEST:
            return { ...state, loading: true, error: null }

        case ComputerActionsTypes.FETCH_COMPUTERS_SUCCESS:
            return { ...state, loading: false, computers: action.payload }

        case ComputerActionsTypes.FETCH_COMPUTERS_FAILURE:
            return { ...state, loading: false, error: action.payload }



        case ComputerActionsTypes.CREATE_COMPUTER_REQUEST:
            console.log("CREATE_COMPUTER_REQUEST")
            return { ...state, creating: true, createError: null }

        case ComputerActionsTypes.CREATE_COMPUTER_SUCCESS:
            console.log("CREATE_COMPUTER_SUCCESS")
            return { ...state, creating: false, createdComputer: action.payload, computers: [action.payload.computer, ...state.computers!] }

        case ComputerActionsTypes.CREATE_COMPUTER_FAILURE:
            console.log("CREATE_COMPUTER_FAILURE")
            return { ...state, creating: false, createError: action.payload }

        default:
            return state;
    }
}

