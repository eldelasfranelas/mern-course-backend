import uuid from 'uuid'
import { REMOVE_ALERT, SET_ALERT } from "./types";

export const setAlert = (msg, alertType, timeout = 3000) => dispatch => {
    const id = uuid.v4()
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id, isVisible: true }
    })

    setTimeout(() => {
        dispatch({ type: REMOVE_ALERT, payload: id })
    }, timeout)
}

export const removeAlert = (id) => dispatch => {
    dispatch({
        type: REMOVE_ALERT,
        payload: { id }
    })
}
