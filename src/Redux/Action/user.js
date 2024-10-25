import * as api from '../api/api'

export const signin = (formData, router) => async (dispatch) => {
    try {
        const data = await api.signIn(formData);

        sessionStorage.setItem('userToken', data.data.token)
        sessionStorage.setItem('username', data.data.email)

        if (sessionStorage.getItem("userToken")) {
            router('/dashboard')
            dispatch({ type: 'AUTH', data });
        }
    } catch (error) {
        console.log(error);
    }
}

export const signOut = (navigate) => async (dispatch) => {
    sessionStorage.clear();
    navigate('/')
    dispatch({ type: "LOGOUT" })
}

export const verifyLink = (token, updatePageState) => async (dispatch) => {//code need to be updated for link failure.
    const isLinkReal = await api.verifyLink(token)
    if (isLinkReal) {
        updatePageState(true)
    }
}
