export const userDispatch = (user) => (dispatch) => {
    if (user.target.id === 'username') {
        return dispatch({ type: 'CHANGE_USERNAME', value: user.target.value })
    } else if (user.target.id === 'password') {
        return dispatch({ type: 'CHANGE_PASSWORD', value: user.target.value })
    }
    return dispatch({ type: 'CHANGE_EMAIL', value: user.target.value })
}