import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/'
})

export const addReview = payload => api.post(`/reviews/${payload.placeId}/${payload.text}/${payload.rating}`)
export const getAllReviews = () => api.get(`/reviews/all`);
export const getReviewsByPlaceId = payload => api.get(`/reviews/${payload.placeId}`);

const links = {
    addReview,
    getAllReviews,
    getReviewsByPlaceId,
}

export default links


