import React from "react";
import { Container, Form } from "react-bootstrap";
import ReactTable from 'react-table';
import links from '../../f2bLinks/';
import "./style.css";

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            isLoading: false,
        }
    }

    async componentDidMount() {
        this.setState({isLoading: true})
        console.log("before")
        await links.getAllReviews().then(reviews => {
            console.log("getting reviews")
            console.log(reviews)
            console.log(reviews.data)
            this.setState({
                reviews: reviews.data,
                isLoading: false,
            })
        })
        console.log("the state reviews is")
        console.log(this.state.reviews)
    }

    render() {
        const { reviews, isLoading } = this.state

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Text',
                accessor: 'text',
                filterable: true,
            },
            {
                Header: 'Rating',
                accessor: 'rating',
                filterable: true,
            },
            
        ]
        
        let showTable = true
        // if (!reviews.length) {
        //     showTable = false
        // }

        return(
        <div>
            <p>should be showing table</p>
            <div>
            <table  className="table">
            <thead  key="thead">
            <tr>
                <th>ID</th>
                <th>Rating</th>
                <th>Text</th>
            </tr>
            </thead>
            <tbody>
            {this.state.reviews.map( c  =>
                <tr  key={c._id}>
                <td>{c._id}  </td>
                <td>{c.Rating}</td>
                <td>{c.Text}</td>
            </tr>)}
            </tbody>
            </table>
            </div>

        </div>
        );
    }
}