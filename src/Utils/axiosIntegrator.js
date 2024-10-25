import axios from "axios";

async function axiosIntegrate(config) {
    await axios(config)
        .then(res => {
            console.log(res)
            return res.data
        })
        .catch(e => {
            console.log("error occured", e)
        })
}

export default axiosIntegrate;