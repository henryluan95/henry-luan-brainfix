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
          {/*single card */}
          <div class="card">
            <div class="card__avatar"></div>
            <div class="card__detail">
              <div class="card__header">
                <p class="card__author">Micheal Lyons</p>
                <p class="card__date">02/17/2021</p>
              </div>
              <p class="card__text">
                They BLEW the ROOF off at their last event, once everyone
                started figuring out they were going. This is still simply the
                greatest opening of an event I have EVER witnessed.
              </p>
            </div>
          </div>
          {/*single card */}
          <div class="card">
            <div class="card__avatar"></div>
            <div class="card__detail">
              <div class="card__header">
                <p class="card__author">Gary Wong</p>
                <p class="card__date">02/17/2021</p>
              </div>
              <p class="card__text">
                Every time I see him shred I feel so motivated to get off my
                couch and hop on my board. He’s so talented! I wish I can ride
                like him one day so I can really enjoy myself!
              </p>
            </div>
          </div>
          {/*single card */}
          <div class="card">
            <div class="card__avatar"></div>
            <div class="card__detail">
              <div class="card__header">
                <p class="card__author">Theodore Duncan</p>
                <p class="card__date">02/17/2021</p>
              </div>
              <p class="card__text">
                How can someone be so good!!! You can tell he lives for this and
                loves to do it every day. Every time I see him I feel instantly
                happy! He’s definitely my favorite ever!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Comments;
