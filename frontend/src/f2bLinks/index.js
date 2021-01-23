import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/'
})

export const addReview = payload => api.post(`/reviews/${payload.placeId}/${payload.text}/${payload.rating}`)

export const getAllReviews = () => api.get(`/reviews/all`)

const links = {
    addReview,
    getAllReviews,
}

export default links


