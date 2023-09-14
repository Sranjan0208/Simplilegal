import React, { useEffect, useState } from "react";
import axios from "axios";

const ImgUpload = () => {
  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("http://localhost:8000/upload", formData)
      .then((res) => {
        console.log(res.data.imageURL);
        setImageURL(res.data.imageURL);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-screen">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload Image</button>
      <br />
      {imageURL && (
        <img
          src={`http://localhost:8000/public/uploads/` + imageURL}
          alt="Uploaded Image"
          style={{ maxWidth: "100%", maxHeight: "80vh" }}
        />
      )}
    </div>
  );
};

export default ImgUpload;
