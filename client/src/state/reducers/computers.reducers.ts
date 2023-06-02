import { ComputerActionsTypes } from "../actions-types/computer.action-types"

interface STATE {
    loading: boolean,
    computers?: IComputer[],
    createdComputer?: IComputer,
    error?: string | null
}

const initialState = {
    loading: false,
    computers: undefined,
    createdComputer: undefined,
    error: null
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
            return { ...state, loading: true, error: null }

        case ComputerActionsTypes.CREATE_COMPUTER_SUCCESS:
            console.log("CREATE_COMPUTER_SUCCESS")
            return { ...state, loading: false, createdComputer: action.payload }

        case ComputerActionsTypes.CREATE_COMPUTER_FAILURE:
            console.log("CREATE_COMPUTER_FAILURE")
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }
}

