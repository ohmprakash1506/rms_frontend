
const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case 'AUTH':
            return { ...state, authData: action.data.data }
        case 'LOGOUT':
            state.authData = null
            return state;

        default:
            return state;
    }
};

export default authReducer;
