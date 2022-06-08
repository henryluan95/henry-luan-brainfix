import React from "react";
import "./VideoUploadPage.scss";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import Button from "../../components/Button/Button";
import publishIcon from "../../assets/Icons/publish.svg";
import axios from "axios";

const VideoUploadPage = (props) => {
  const handleSubmit = (e) => {
    //prevent browser from refreshing
    e.preventDefault();
    //Get values from input fields
    const title = e.target.title.value;
    const description = e.target.description.value;
    //Create valid variable to validate inputs
    let valid = true;

    //Check if title input is filled
    const titleInputEl = e.target.title;
    if (!title.trim()) {
      titleInputEl.classList.add("input__details-input--error");
      valid = false;
    } else {
      titleInputEl.classList.remove("input__details-input--error");
    }

    //Check if title input is filled
    const descriptionInputEl = e.target.description;
    if (!description.trim()) {
      descriptionInputEl.classList.add("input__details-input--error");
      valid = false;
    } else {
      descriptionInputEl.classList.remove("input__details-input--error");
    }

    if (valid) {
      //Create new Video object
      const newVideo = {
        title,
        description,
      };

      //post it to API
      axios.post("http://localhost:8080/videos", newVideo);

      //Clean input fields
      e.target.title.value = "";
      e.target.description.value = "";

      //when form submits, return to home back
      props.history.push("/");
    }
  };

  return (
    <main className="upload section">
      <h1 className="upload__title">Upload Video</h1>
      <div className="upload__input input">
        <div className="input__information">
          <div className="input__video">
            <span className="input__video-title">video thumbnail</span>
            <img
              src={thumbnail}
              className="input__video-image"
              alt="video thumbnail"
            />
          </div>
          <form className="input__details" onSubmit={handleSubmit}>
            <label className="input__details-label">
              title your video
              <input
                className="input__details-input"
                type="text"
                placeholder="Add a title to your video"
                name="title"
              />
            </label>
            <label className="input__details-label">
              add a video description
              <textarea
                className="input__details-input"
                type="text"
                placeholder="Add a description to your video"
                name="description"
              />
            </label>
            <div className="upload__buttons">
              <Button
                text="Publish"
                className="upload__buttons--publish"
                icon={publishIcon}
              />
              <Button
                text="Cancel"
                className="upload__buttons--cancel"
                type="button"
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default VideoUploadPage;
