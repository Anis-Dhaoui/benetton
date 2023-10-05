import { PasswordActionsTypes } from "../actions-types/password.actions-types"

export const updatePasswordRequest = () => ({
    type: PasswordActionsTypes.UPDATE_PASSWORD_REQUEST
})

export const updatePasswordSuccess = (password: IPassword) => ({
    type: PasswordActionsTypes.UPDATE_PASSWORD_SUCCESS,
    payload: password
})

export const updatePasswordFailure = (errMsg: string) => ({
    type: PasswordActionsTypes.UPDATE_PASSWORD_FAILURE,
    payload: errMsg
})