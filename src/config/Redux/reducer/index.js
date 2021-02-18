const initialState = {
    username: '',
    email: '',
    password: '',
    loading: false,
    error: {}
}

const reducer = (state = initialState, action) => {
    if (action.type === 'CHANGE_USERNAME') {
        return {
            ...state,
            username: action.value
        }
    }
    if (action.type === 'CHANGE_EMAIL') {
        return {
            ...state,
            email: action.value
        }
    }
    if (action.type === 'CHANGE_PASSWORD') {
        return {
            ...state,
            password: action.value
        }
    }
    if (action.type === 'CHANGE_LOADING') {
        return {
            ...state,
            loading: action.value
        }
    }
    if (action.type === 'CHANGE_ERROR') {
        return {
            ...state,
            error: action.value
        }
    }
    return state
}

export default reducer  