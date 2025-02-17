import axios from 'axios';
const API = {
     //API_URL: "https://marketwealthadvisors.herokuapp.com"
    //API_URL: "https://constantsys.herokuapp.com",
     API_URL: "https://api.aspiremarkettrendz.com"
    // API_URL: "http://localhost:5000"
}
var axiosservice = (method, url, paylaod) => {
    url = API.API_URL + url;
    const config = {};
    return new Promise((resolve, rejects) => {
        switch (method) {
            case 'POST':
                axios.post(url, paylaod, config).then((res) => {
                    resolve(res.data);
                }).catch(err => {
                    rejects(err)
                })
                break;
            case 'GET':
                axios.get(url, config).then(res => {
                    resolve(res.data);
                }).catch(err => {
                    rejects(err)
                });
                break;
            case 'PUT':
                axios.put(url, paylaod, config).then(res => {
                    resolve(res.data);
                }).catch(err => {
                    rejects(err)
                });
                break;
            case 'PATCH':
                axios.patch(url, paylaod, config).then(res => {
                    resolve(res.data);
                }).catch(err => {
                    rejects(err)
                });
                break;
            case 'DELETE':
                axios.delete(url, config).then(res => {
                    resolve(res.data);
                }).catch(err => {
                    rejects(err)
                });
                break;
            default:
                break;
        }
    });
}


export default {
    apis: axiosservice
}


