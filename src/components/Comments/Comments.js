import axios from "axios";
import { Component } from "react";
import "./Comments.scss";
import Button from "../Button/Button";
import profileImage from "../../assets/Images/Mohan-muruge.jpg";
import commentIcon from "../../assets/Icons/add_comment.svg";
import { formatTimestampDeepDive } from "../../utils/timeFormat";
import emptyprofile from "../../assets/Images/emptyprofile.svg";

//This component is the comment section of the homepage
class Comments extends Component {
  //set state for input
  state = {
    inputValue: "",
  };

  //Create a method to handle changes in input field
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  // DIVING DEEPER
  // Create a method to post a comment
  postComment = (url, commentObject) => {
    axios
      .post(url, commentObject)
      .then((response) => {
        const { fetchVideo } = this.props;
        fetchVideo(this.props.videoId);
        this.setState({
          inputValue: "",
        });
      })
      .catch((err) => console.error(err));
  };

  // DIVING DEEPER
  // Create a method to delete a comment
  deleteComment = (commentId) => {
    axios
      .delete(
        `http://localhost:8080/videos/${this.props.videoId}/comments/${commentId}`
      )
      .then((response) => {
        const { fetchVideo } = this.props;
        fetchVideo(this.props.videoId);
      })
      .catch((err) => console.error(err));
  };

  //Create a method to handle submit
  submitComment = (e) => {
    e.preventDefault();
    const comment = {
      name: "Mohan Murgue",
      comment: this.state.inputValue,
    };

    this.postComment(
      `http://localhost:8080/videos/${this.props.videoId}/comments`,
      comment
    );
  };

  render() {
    const { comments } = this.props;

    return (
      <section className="comment section">
        <h4 className="comment__title">{comments.length} Comments</h4>
        <div className="comment__content">
          {/*input section */}
          <div className="comment__input-section">
            <img
              src={profileImage}
              alt="Mohan Murgue"
              className="comment__avatar"
            />
            <form className="comment__form form" onSubmit={this.submitComment}>
              <div className="form__container">
                <label htmlFor="comment">JOIN THE CONVERSATION</label>
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="Enter your comment"
                  value={this.state.inputValue}
                  onChange={this.handleChange}
                />
              </div>
              <Button
                text="Comment"
                className="comment__button"
                icon={commentIcon}
              />
            </form>
          </div>
          {/*cards section */}
          {comments.map((comment) => {
            return (
              <div key={comment.timestamp} className="card">
                <img
                  className="card__avatar"
                  alt="empty profile"
                  src={emptyprofile}
                ></img>
                <div className="card__detail">
                  <div className="card__header">
                    <p className="card__author">{comment.name}</p>
                    <p className="card__date">
                      {formatTimestampDeepDive(comment.timestamp)}
                    </p>
                  </div>
                  <p className="card__text">{comment.comment}</p>
                  <Button
                    text="Delete"
                    className="card__delete-button"
                    icon=""
                    onClick={() => this.deleteComment(comment.timestamp)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Comments;
