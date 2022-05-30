import React from "react";
import "./VideoUploadPage.scss";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import Button from "../../components/Button/Button";
import publishIcon from "../../assets/Icons/publish.svg";

export const VideoUploadPage = () => {
  return (
    <main className="upload section">
      <h1 className="upload__title">Upload Video</h1>
      <div className="upload__input input">
        <div className="input__video">
          <span className="input__video-title">video thumbnail</span>
          <img
            src={thumbnail}
            className="input__video-image"
            alt="video thumbnail"
          />
        </div>
        <div className="input__details">
          <label>
            title your video
            <input type="text" placeholder="Add a title to your video" />
          </label>
          <label>
            add a video description
            <textarea
              type="text"
              placeholder="Add a description to your video"
            />
          </label>
        </div>
      </div>
      <div className="upload__buttons">
        <Button
          text="Publish"
          className="upload__buttons--publish"
          icon={publishIcon}
        />
        <Button text="Cancel" className="upload__buttons--cancel" />
      </div>
    </main>
  );
};
