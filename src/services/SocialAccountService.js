import axios from './AxiosInstance';

const getSocialAccountsOfUser = () => {
    return axios.get('/profile/social-accounts');
};

export { getSocialAccountsOfUser };
