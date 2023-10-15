import axios from 'axios';

const ApiConnect = axios.create ({
    baseURL: "https://api.obanana.shop/api/v1/",
    responseType:"json",
    withCredentials: true,
});

export default ApiConnect;