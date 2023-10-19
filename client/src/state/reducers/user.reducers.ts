import { UserActionsTypes } from "../actions-types/user.actions-types"

interface STATE {
    loading: boolean,
    users?: any,
    error?: string | null,

    creating?: boolean,
    createdUser?: any,
    createError?: string | null

    deleting?: boolean,
    deletedUser?: any,
    deleteError?: string | null,

    oneUserLoading?: boolean,
    user?: IUser,
    oneUserError?: string | null,

    updating?: boolean,
    updatedUser?: any,
    updateError: string | null
}

const initialState = {
    loading: false,
    users: undefined,
    error: null,

    creating: false,
    createdUser: undefined,
    createError: null,

    deleting: false,
    deletedUser: undefined,
    deleteError: null,

    oneUserLoading: false,
    user: undefined,
    oneUserError: null,

    updating: false,
    updatedUser: undefined,
    updateError: null
}

export const UserRed = (state: STATE = initialState, action: any): STATE => {
    switch (action.type) {
        case UserActionsTypes.FETCH_USERS_REQUEST:
            return { ...state, loading: true, error: null }

        case UserActionsTypes.FETCH_USERS_SUCCESS:
            return { ...state, loading: false, users: action.payload }

        case UserActionsTypes.FETCH_USERS_FAILURE:
            return { ...state, loading: false, error: action.payload }



        // case UserActionsTypes.CREATE_USER_REQUEST:
        //     return { ...state, creating: true, createError: null }

        // case UserActionsTypes.CREATE_USER_SUCCESS:
        //     return { ...state, creating: false, createdUser: action.payload, users: [action.payload.computer, ...(state.users as IUser[])!] }

        // case UserActionsTypes.CREATE_USER_FAILURE:
        //     return { ...state, creating: false, createError: action.payload }



        // case UserActionsTypes.DELETE_USER_REQUEST:
        //     return { ...state, deleting: true, deleteError: null }

        // case UserActionsTypes.DELETE_USER_SUCCESS:
        //     return { ...state, deleting: false, deletedUser: action.payload, users: (state.users as IUser[])!.filter((item: any) => item._id !== action.payload.deletedcomputer._id) }

        // case UserActionsTypes.DELETE_USER_FAILURE:
        //     return { ...state, deleting: false, deleteError: action.payload }



        // case UserActionsTypes.GET_SINGLE_USER_REQUEST:
        //     return { ...state, oneUserLoading: true, oneUserError: null }

        // case UserActionsTypes.GET_SINGLE_USER_SUCCESS:
        //     return { ...state, oneUserLoading: false, user: action.payload }

        // case UserActionsTypes.GET_SINGLE_USER_FAILURE:
        //     return { ...state, oneUserLoading: false, oneUserError: action.payload }



        case UserActionsTypes.UPDATE_USER_REQUEST:
            return { ...state, updating: true }

        case UserActionsTypes.UPDATE_USER_SUCCESS:
            const storedData = localStorage.getItem('loggedUser');
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                if (action.payload.updatedUser._id === parsedData.user._id) {
                    parsedData.user = action.payload.updatedUser;
                    const updatedData = JSON.stringify(parsedData);
                    localStorage.setItem('loggedUser', updatedData);
                }
            }
            return {
                ...state,
                updating: false,
                updatedUser: action.payload,
                users: (state.users.users as IUser[])!.map((item: any) => item._id === action.payload.updatedUser._id ? action.payload.updatedUser : item)
            }

        case UserActionsTypes.UPDATE_USER_FAILURE:
            return { ...state, updating: false, updateError: action.payload }

        default:
            return state;
    }
}