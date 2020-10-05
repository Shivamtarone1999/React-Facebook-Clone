import axios from axios

const instance = axios.create({
    baseURL = 'https://facebook-webapp.herokuapp.com'
})

export default instance;