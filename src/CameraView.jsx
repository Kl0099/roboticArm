import React from "react";
import Webcam from "react-webcam";

const CameraView = () => {
  return (
    <div>
      <Webcam
        width={"200"}
        height={"200"}
      />
    </div>
  );
};

export default CameraView;
