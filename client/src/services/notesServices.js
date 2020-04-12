import axios from 'axios';
import env from '../env';
const services = {};

services.getOne = async (data) => {
    return axios({
        method: "GET",
        url: `${env.API}/notes/id/${data}`,
        headers: {
            "Authorization": `Bearer ${window.localStorage.token}`
        }
    });
};

services.getByUserId = async (data) => {
    return axios({
        method: "GET",
        url: `${env.API}/notes/user/id/${data}`,
        headers: {
            "Authorization": `Bearer ${window.localStorage.token}`
        }
    });
};

services.getByCampaignId = async (data) => {
    return axios({
        method: "GET",
        url: `${env.API}/notes/campaign/id/${data}`,
        headers: {
            "Authorization": `Bearer ${window.localStorage.token}`
        }
    });
};

services.getByCampaignIdAndUserId = async (data) => {
    return axios({
        method: "GET",
        url: `${env.API}/notes/user/id/${data.user_id}/campaign/id/${data.campaign_id}`,
        headers: {
            "Authorization": `Bearer ${window.localStorage.token}`
        }
    });
};

services.save = async (data) => {
    return axios({
        method: "POST",
        url: `${env.API}/notes`,
        data: {
            user_id: data.user_id,
            campaign_id: data.campaign_id,
            title: data.title,
            content: data.content,
            public: data.public
        },
        headers: {
            "Authorization": `Bearer ${window.localStorage.token}`
        }
    });
};

services.update = async (data) => {
    return axios({
        method: "PUT",
        url: `${env.API}/notes`,
        data: {
            id: data.id,
            title: data.title,
            content: data.content,
            public: data.public
        },
        headers: {
            "Authorization": `Bearer ${window.localStorage.token}`
        }
    });
};

services.delete = async (data) => {
    return axios({
        method: "DELETE",
        url: `${env.API}/id/${data}`,
        headers: {
            "Authorization": `Bearer ${window.localStorage.token}`
        }
    });
};

export default services;