import React from "react";

const ImgViewer = (imageUrl) => {
  return (
    <div style={{ width: "600px" }}>
      <img
        src={imageUrl}
        alt="Uploaded Image"
        style={{ maxWidth: "100%", maxHeight: "80vh" }}
      />
    </div>
  );
};

export default ImgViewer;
