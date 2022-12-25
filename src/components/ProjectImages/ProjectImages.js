import React, { useState } from "react";
import susProjects from "../susProjects/susProjects";

import "./ProjectImages.css";

function ProjectImages({ showEnlargedImg, setShowEnlargedImg, setCurrentImg }) {
  const changeCurrentImg = (img) => {
    setCurrentImg(img);
    setShowEnlargedImg(true);
  };

  return (
    <div id="main-container">
      <div id="project-image-container">
        {susProjects.map((val, i) => (
          <div
            onClick={() => {
              changeCurrentImg(val.img);
            }}
          >
            <img key={i} id="individual-image" src={val.img} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectImages;
