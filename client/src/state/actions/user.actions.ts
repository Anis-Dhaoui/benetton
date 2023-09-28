import { UserActionsTypes } from "../actions-types/user.actions-types"

export const fetchUsersRequest = () => ({
    type: UserActionsTypes.FETCH_USERS_REQUEST
})

export const fetchUsersSuccess = (users: any) => ({
    type: UserActionsTypes.FETCH_USERS_SUCCESS,
    payload: users
})

export const fetchUsersFailure = (errMsg: string) => ({
    type: UserActionsTypes.FETCH_USERS_FAILURE,
    payload: errMsg
})




export const createUsersRequest = () => ({
    type: UserActionsTypes.CREATE_USER_REQUEST
})

export const createUsersSuccess = (computer: any) => ({
    type: UserActionsTypes.CREATE_USER_SUCCESS,
    payload: computer
})

export const createUsersFailure = (errMsg: string) => ({
    type: UserActionsTypes.CREATE_USER_FAILURE,
    payload: errMsg
})




export const updateUsersRequest = () => ({
    type: UserActionsTypes.UPDATE_USER_REQUEST
})

export const updateUsersSuccess = (computer: any) => ({
    type: UserActionsTypes.UPDATE_USER_SUCCESS,
    payload: computer
})

export const updateUsersFailure = (errMsg: string) => ({
    type: UserActionsTypes.UPDATE_USER_FAILURE,
    payload: errMsg
})




export const deleteUsersRequest = () => ({
    type: UserActionsTypes.DELETE_USER_REQUEST
})

export const deleteUsersSuccess = (deletedUser: any) => ({
    type: UserActionsTypes.DELETE_USER_SUCCESS,
    payload: deletedUser
})

export const deleteUsersFailure = (errMsg: string) => ({
    type: UserActionsTypes.DELETE_USER_FAILURE,
    payload: errMsg
})




export const getSingleUserRequest = () => ({
    type: UserActionsTypes.GET_SINGLE_USER_REQUEST
})

export const getSingleUserSuccess = (computer: any) => ({
    type: UserActionsTypes.GET_SINGLE_USER_SUCCESS,
    payload: computer
})

export const getSingleUserFailure = (errMsg: string) => ({
    type: UserActionsTypes.GET_SINGLE_USER_FAILURE,
    payload: errMsg
})