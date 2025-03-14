import axios from './AxiosInstance';

const getSocialAccountsOfUser = () => {
    return axios.get('api/profile/social-accounts');
};

export { getSocialAccountsOfUser };
