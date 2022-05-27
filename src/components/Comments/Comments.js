import "./Comments.scss";
import Button from "../Button/Button";
import profileImage from "../../assets/Images/Mohan-muruge.jpg";
import commentIcon from "../../assets/Icons/add_comment.svg";
import { formatTimestampDeepDive } from "../../utils/utilities";

function Comments({ selectedMovie }) {
  const { comments } = selectedMovie;

  return (
    <section className="comment">
      <h4 className="comment__title">{comments.length} Comments</h4>
      <div className="comment__content">
        {/*input section */}
        <div className="comment__input-section">
          <img
            src={profileImage}
            alt="Mohan Murgue"
            className="comment__avatar"
          />
          <form className="comment__form form">
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
              className="comment__button"
              icon={commentIcon}
            />
          </form>
        </div>
        {/*cards section */}
        {comments.map((comment, index) => {
          return (
            <div key={index} className="card">
              <div className="card__avatar"></div>
              <div className="card__detail">
                <div className="card__header">
                  <p className="card__author">{comment.name}</p>
                  <p className="card__date">
                    {formatTimestampDeepDive(comment.timestamp)}
                  </p>
                </div>
                <p className="card__text">{comment.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Comments;
