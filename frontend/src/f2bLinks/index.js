import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/'
})

export const addReview = payload => {
    console.log("adding review blah blah")
    console.log(payload.address)
    console.log(payload.text)
    console.log(payload.rating)
    console.log(payload.social)
    console.log(payload.sanitation)
    console.log(payload.lat)
    console.log(payload.lng)
    return api.post(`/reviews/${payload.address}/${payload.text}/${payload.rating}/${payload.social}/${payload.sanitation}/${payload.lat}/${payload.lng}`)
}

export const getAllReviews = () => api.get(`/reviews/all`)

const links = {
    addReview,
    getAllReviews,
}

export default links


