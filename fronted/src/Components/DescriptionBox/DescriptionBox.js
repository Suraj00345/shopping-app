import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          The term originally referred to messages sent using the Short Message
          Service (SMS) on mobile devices. It has grown beyond alphanumeric text
          to include multimedia messages using the Multimedia Messaging Service
          (MMS) and Rich Communication Services (RCS), which can contain digital
          images, videos, and sound content, as well as ideograms known as emoji
          (happy faces, sad faces, and other icons),{" "}
        </p>
        <p>
          The term originally referred to messages sent using the Short Message
          Service (SMS) on mobile devices. It has grown beyond alphanumeric text
          to include multimedia messages using the Multimedia Messaging Service
          (MMS) and Rich Communication Services (RCS), which can contain digital
          images, videos, and sound content, as well as ideograms known as emoji
          (happy faces, sad faces, and other icons),
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
