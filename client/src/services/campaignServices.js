import axios from 'axios';
import env from '../env';
const services = {};

services.getCampaigns = async (data) => {
    return axios({
        method: "GET",
        url: `${env.API}/campaigns/user/${data}`,
        headers: {
            "Authorization": `Bearer ${window.localStorage.token}`
        }
    });
};

services.create = async (data) => {
    let formData = new FormData();

    formData.append('owner_id', data.owner_id);
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('edition', data.edition);
    formData.append('avatar', data.avatar);

    return axios({
        method: "POST",
        url: `${env.API}/campaigns`,
        data: formData,
        headers: {
            "Authorization": `Bearer ${window.localStorage.token}`,
            "Content-Type": "multipart/form-data"
        }
    });
};

services.update = async (data) => {
    let formData = new FormData();

    formData.append('id', data.id);
    formData.append('owner_id', data.owner_id);
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('avatar', data.avatar);
    formData.append('edition', data.edition);
    formData.append('invite_link', data.invite_link);

    return axios({
        method: "PUT",
        url: `${env.API}/campaigns`,
        data: formData,
        headers: {
            "Authorization": `Bearer ${window.localStorage.token}`,
            "Content-Type": "multipart/form-data"
        }
    });
};

services.delete = async (data) => {
    return axios({
        method: "DELETE",
        url: `${env.API}/campaigns/id/${data}`,
        headers: {
            "Authorization": `Bearer ${window.localStorage.token}`
        }
    });
};

export default services;