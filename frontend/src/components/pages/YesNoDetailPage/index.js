import React, { Component } from 'react'
import {
  PageTemplate, MainCarousel, MainListGroup, Footer
} from 'components'

import  NavigationBar   from '../../../containers/NavigationBar'


//author: "test"
// comments: (6) [5, 6, 7, 8, 9, 10]
// created: "2019-06-04T21:06:55.481006+09:00"
// id: 1
// mainTopic: "what"
// openStatus: false
// pictureA: null
// pictureB: null
// startTime: "2012-11-26T05:53:04+09:00"
// summary: "what"
// textDescriptionA: "what"
// textDescriptionB: "what"
// title: "hello"
// totalTimeLimit: "00:00:10"
// wordLimit: 10

// "content": "dddd",
// "createdTime": "2019-06-04T22:19:48.362449+09:00",
// "id": 1,
// "post": null,
// "user": 1
// {loading: false, comments: {…}}
// comments:
// content: "dddd"
// createdTime: "2019-06-04T22:19:48.362449+09:00"
// id: 1
// post: null
// user: 1

import { Heading, Paragraph, PreformattedText } from 'components'
import styled from 'styled-components'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter,
        MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact'

import { Button, Form, Header } from 'semantic-ui-react'

function Comment(props) {
  const { user, content, createdTime } = props.comment;

  return (
    <div className="media mb-3">
      <img
        className="mr-3 bg-light rounded"
        width="48"
        height="48"
        src={`https://api.adorable.io/avatars/48/${user}@adorable.io.png`}
        alt={user}
      />

      <div className="media-body p-2 shadow-sm rounded bg-light border">
        <small className="float-right text-muted">{new Date(createdTime).toLocaleString()}</small>
        <h6 className="mt-0 mb-1 text-muted">{user}</h6>
        {content}
      </div>
    </div>
  );
}

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: "",

      comment: {
        username: "",
        message: ""
      }
    };

    // bind context to methods
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * Handle form input field changes & update the state
   */
  handleFieldChange = event => {
    const { value, name } = event.target;

    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [name]: value
      }
    });
  };

  componentDidMount(){
    // console.log(JSON.parse(localStorage.getItem('user')))
    let userData = JSON.parse(localStorage.getItem('user'))
    this.setState({username: userData.username})
  }
  /**
   * Form submit handler
   */
  onSubmit(e) {
    // prevent default form submission
    e.preventDefault();

    if (!this.isFormValid()) {
      this.setState({ error: "Comment fields are required." });
      return;
    }

    // loading status and clear error
    this.setState({ error: "", loading: true });

    // persist the comments on server
    let userData = JSON.parse(localStorage.getItem('user'))

    let { comment } = this.state;
    fetch("http://localhost:8000/yesorno/comment/", {
      method: "post",
      headers: {
          'Authorization' : userData.token,
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment)
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          this.setState({ loading: false, error: res.error });
        } else {
          // add time return from api and push comment to parent state
          comment.time = res.time;
          this.props.addComment(comment);

          // clear the message box
          this.setState({
            loading: false,
            comment: { ...comment, message: "" }
          });
        }
      })
      .catch(err => {
        this.setState({
          error: "Something went wrong while submitting form.",
          loading: false
        });
      });
  }

  /**
   * Simple validation
   */
  isFormValid() {
    return this.state.comment.message !== "";
  }

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }

  render() {

    return (
      <React.Fragment>
        <form method="post" onSubmit={this.onSubmit}>
          <div className="form-group">
          <h6> 자유롭게 의견을 남겨보세요 {this.state.username}님! </h6>
          </div>
          <div className="form-group">
            <textarea
              onChange={this.handleFieldChange}
              value={this.state.comment.message}
              className="form-control"
              placeholder="Your Comment"
              name="message"
              rows="5"
            />
          </div>

          {this.renderError()}

          <div className="form-group">
            <button disabled={this.state.loading} className="btn btn-primary">
              Comment &#10148;
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

function CommentList(props) {
  return (
    <div className="commentList">
      <h5 className="text-muted mb-4">
        <span className="badge badge-success">{props.comments.length}</span>{" "}
        Comment{props.comments.length > 0 ? "s" : ""}
      </h5>
      {props.comments.length === 0 && !props.loading ? (
        <div className="alert text-center alert-info">
          Be the first to comment
        </div>
      ) : null}
      {props.comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
}


const StyledHeading = styled(Heading)`
  text-align: center;
`

const Description = styled(Paragraph)`
  text-align: center;
  margin: 2rem;
  @media screen and (max-width: 640px) {
    margin: 1rem;
  }
`

class YesNoDetailPage extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      loading: true,
      comments: []
    }

    this.addComment = this.addComment.bind(this);

  }
  componentDidMount() {
  const { match: { params } } = this.props;

  fetch('http://localhost:8000/yesorno/detail/' + params.yesnoId + '/')
  .then(response => response.json())
  .then(data => this.setState({data: data, loading: false}))

 fetch("http://localhost:8000/yesorno/comment/" + params.yesnoId + '/')
   .then(res => res.json())
   .then(res => this.setState({comments: [res, ...this.state.comments]}))
  }

  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    });
  }

  render(){
    return(
      <PageTemplate
        header={<NavigationBar/>}
        footer={<Footer />}
      >
      <StyledHeading>{this.state.data.title}</StyledHeading>
        <h5>작성자: {this.state.data.author}</h5>
      <PreformattedText>
        주제: {this.state.data.mainTopic}
        <br/>
        작성일: {new Date(this.state.data.created).toLocaleString()}
      </PreformattedText>
      <Description>
        {this.state.data.summary}<br />
      </Description>
      <MDBContainer>
        <MDBRow>
          <MDBCol className="justify-content-center" >
            <MDBCard style={{ marginTop: "1rem" }} className="text-center">
              <MDBCardHeader color="success-color-dark"></MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>{this.state.data.textDescriptionA}
                  <br/>
                  <img src={"http://localhost:8000" + this.state.data.pictureA} width="200rem" />
                  </MDBCardTitle>
                  <MDBCardText>
                  </MDBCardText>
                </MDBCardBody>
              <MDBCardFooter color="success-color">46%</MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol className="ustify-content-center">
          <MDBCard style={{ marginTop: "1rem" }} className="text-center">
            <MDBCardHeader color="danger-color-dark"></MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>{this.state.data.textDescriptionB}
              <br/>
              <img src={"http://localhost:8000" + this.state.data.pictureB} width="200rem" />
              </MDBCardTitle>
              <MDBCardText>
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter color="danger-color">54%</MDBCardFooter>
          </MDBCard>
        </MDBCol>
       </MDBRow>

      </MDBContainer>
      <br/>
      <br/>
      <div className="App container bg-light shadow">
        <header className="App-header">
          <h1 className="App-title">
          댓글 남기기
          <span className="px-2" role="img" aria-label="Chat">
            💬
          </span>
          </h1>
        </header>
      <div className="row">
        <div className="col-4  pt-3 border-right">
            <CommentForm addComment={this.addComment} />
        </div>
        <div className="col-8  pt-3 bg-white">
          <CommentList
              loading={this.state.loading}
              comments={this.state.comments}
            />
        </div>
       </div>
      </div>
     </PageTemplate>
    )
  }
}

export default YesNoDetailPage
