"use client";
import React from "react";

// import myVideo from "../../assets/images/";
const Video = () => {
  return (
    <div>
      {" "}
      <video
        width="320"
        height="240"
        controls
        autoPlay
        loop
        // muted
        playsInline
        preload="auto"
        // className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://youtu.be/1hB2g2uLakI?si=yb79meqlQEH6CD9C"
          type="video/mp4"
        />
        {/* <track
          src="../../assets/images/video.mp4"
          kind="subtitles"
          srcLang="en"
          label="English"
        /> */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
