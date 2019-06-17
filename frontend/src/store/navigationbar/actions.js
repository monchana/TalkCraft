import * as ACTIONTYPES from "./actionTypes"

export const fetchLogin = (username, password) => ({
  type: ACTIONTYPES.FETCH_LOGIN,
  data: { username, password },
})

export const updateLoginState = data => ({ type: ACTIONTYPES.SUCCESS_LOGIN, data })

export const logout = () => ({ type: ACTIONTYPES.LOGOUT })

export const getData = () => ({ type: ACTIONTYPES.GET_DATA })

export const fetchSignup = (username, password, email) => ({
  type: ACTIONTYPES.FETCH_SIGNUP,
  data: { username, password, email },
})

export const updateSignupState = data => ({ type: ACTIONTYPES.SUCCESS_SIGNUP, data })
