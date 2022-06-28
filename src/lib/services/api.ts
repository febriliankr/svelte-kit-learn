import Axios from 'axios';

const api = Axios.create({
	baseURL: process.env.api_url || 'http://localhost:8000/api/v1'
});

export default api;
