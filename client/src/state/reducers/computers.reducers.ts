import { ComputerActionsTypes } from "../actions-types/computer.action-types"

interface STATE {
    loading: boolean,
    computers?: IComputer[] | IComputer,
    error?: string | null,

    creating?: boolean,
    createdComputer?: any,
    createError?: string | null

    deleting?: boolean,
    deletedComputer?: any,
    deleteError?: string | null
}

const initialState = {
    loading: false,
    computers: undefined,
    error: null,

    creating: false,
    createdComputer: undefined,
    createError: null,

    deleting: false,
    deletedComputer: undefined,
    deleteError: null
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
            return { ...state, creating: false, createdComputer: action.payload, computers: [action.payload.computer, ...(state.computers as IComputer[])!] }

        case ComputerActionsTypes.CREATE_COMPUTER_FAILURE:
            console.log("CREATE_COMPUTER_FAILURE")
            return { ...state, creating: false, createError: action.payload }



        case ComputerActionsTypes.DELETE_COMPUTER_REQUEST:
            return { ...state, deleting: true, deleteError: null }

        case ComputerActionsTypes.DELETE_COMPUTER_SUCCESS:
            return { ...state, deleting: false, deletedComputer: action.payload, computers: (state.computers as IComputer[])!.filter((item: any) => item._id !== action.payload.deletedcomputer._id) }

        case ComputerActionsTypes.DELETE_COMPUTER_FAILURE:
            return { ...state, deleting: false, deleteError: action.payload }



        case ComputerActionsTypes.GET_SINGLE_COMPUTER_REQUEST:
            return { ...state, loading: true, error: null }

        case ComputerActionsTypes.GET_SINGLE_COMPUTER_SUCCESS:
            return { ...state, loading: false, computers: action.payload }

        case ComputerActionsTypes.GET_SINGLE_COMPUTER_FAILURE:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }
}

