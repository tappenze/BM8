import React from "react";
import { Container, Form, Col, Row } from "react-bootstrap";
import "./style.css";
import links from "../../f2bLinks/";

export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      rating: "",
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {}

  async handleSubmit(event) {
    event.preventDefault();
    await links
      .addReview({ text: this.state.text, rating: this.state.rating })
      .then(() => {
        console.log("added to database");
      });
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }

  handleRatingChange(event) {
    this.setState({ rating: event.target.value });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Container id="container">
          <Row className="text-center">
            <Col>
              <br></br>
              <div id="login-box">
                <h3>Text</h3>
                <Form.Group controlId="formBasicUserName">
                  <Form.Control
                    type="review"
                    placeholder="Leave a review"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                    ref="text"
                  />
                </Form.Group>
                <h3>Rating</h3>
                <Form.Group controlId="formBasicPassWord">
                  <Form.Control
                    type="rating"
                    placeholder="Rating?"
                    value={this.state.rating}
                    onChange={this.handleRatingChange}
                    ref="rating"
                  />
                </Form.Group>

                <br></br>
                <input
                  id="entry-button"
                  className="btn btn-primary"
                  type="submit"
                  value="Enter"
                />
              </div>
            </Col>
          </Row>
        </Container>

        {/* <div className="form-group">
              <label>UserName:</label>
              <input className="form-control" type="text" ref="userName" />
    
              <label>Password:</label>
              <input className="form-control" type="text" ref="passWord" />
    
            </div> */}
      </Form>
    );
  }
}
