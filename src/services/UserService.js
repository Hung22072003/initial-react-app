import axios from './AxiosInstance';

const getUserFromToken = () => {
    return axios.get('api/profile/me');
};

export { getUserFromToken };
