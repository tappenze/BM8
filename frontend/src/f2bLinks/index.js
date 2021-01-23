import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/'
})

export const makeReview = payload => api.post(`/reviews`, payload)
export const getAllReviews = () => api.get(`/reviews`)

const links = {
    makeReview,
    getAllReviews,
}

export default links


