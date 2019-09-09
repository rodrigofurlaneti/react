import axios from 'axios';
const api = axios.create({ baseURL: 'https://newsapi.org/v2/top-headlines?country=br&apiKey=f379e5691f5a4fd3b601a6990e0c4a14'});
export default api;