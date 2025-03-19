import axios from './AxiosInstance';

const postToLinkedin = (message, images) => {
    const formData = new FormData();
    formData.append('message', message);
    images.forEach((image) => formData.append('images[]', image));
    return axios.post('/api/linkedin/post', formData, {
        headers: {
            contentType: 'application/form-data',
        },
    });
};

const post = (content, images, listPlatforms, scheduledTime = null) => {
    const formData = new FormData();
    formData.append('content', content);
    images.forEach((image) => formData.append('mediaUrls[]', image));
    if (scheduledTime) formData.append('scheduledTime', scheduledTime);
    listPlatforms.forEach((platform) => formData.append('listPlatforms[]', platform));
    return axios.post('/api/posts', formData, {
        headers: {
            contentType: 'application/form-data',
        },
    });
};

export { postToLinkedin, post };
