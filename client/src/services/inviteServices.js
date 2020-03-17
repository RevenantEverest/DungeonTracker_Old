import axios from 'axios';
import env from '../env';
const services = {};

services.invite = async (data) => {
    return axios({
        method: "POST",
        url: `${env.API}/invite`,
        data: {
            username: data.username,
            campaign_id: data.campaign_id
        },
        headers: {
            "Authorization": `Bearer ${window.localStorage.token}`
        }
    });
};

export default services;