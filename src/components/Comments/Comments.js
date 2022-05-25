import React from "react";
import "./Comments.scss";
import Button from "../Button/Button";
import profileImage from "../../assets/Images/Mohan-muruge.jpg";
import commentIcon from "../../assets/Icons/add_comment.svg";

class Comments extends React.Component {
  render() {
    return (
      <section className="comment">
        <h4 className="comment__title">3 Comments</h4>
        <div className="comment__content">
          <div className="comment__input-section">
            <img
              src={profileImage}
              alt="Picture of Mohan Murgue"
              className="comment__avatar"
            />

            <form className="form">
              <div className="form__container">
                <label htmlFor="comment">JOIN THE CONVERSATION</label>
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="Enter your comment"
                ></textarea>
              </div>
              <Button
                text="Comment"
                modifier="comment__button"
                icon={commentIcon}
              />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Comments;
