import axios from 'axios';
import env from '../env';
const services = {};

services.registerUser = async (data) => {
    return axios({
        method: "POST",
        url: `${env.API}/register`,
        data: {
            email: data.email,
            username: data.username,
            password: data.password
        }
    });
};

services.login = async (data) => {
    return axios({
        method: "POST",
        url: `${env.API}/login`,
        data: {
            email: data.email,
            password: data.password
        }
    });
};

services.verify = async (data) => {
    return axios({
        method: "POST",
        url: `${env.API}/verify`,
        headers: {
            "Authorization": `Bearer ${data}`
        }
    });
};

export default services;