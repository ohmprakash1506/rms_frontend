import jwt_decode from "jwt-decode";

const token = window.sessionStorage.getItem('userToken')
const userEmail = window.sessionStorage.getItem('username')

async function decodeData(fn) {
    if (!token || !userEmail)
        return;
    const decodedData = await jwt_decode(token)
   
    if (decodedData.email === userEmail) {
        return fn(true)
    }
    else {
        return fn(false)
    }
}

export default decodeData;