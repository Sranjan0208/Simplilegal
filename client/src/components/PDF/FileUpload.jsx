import React, { useEffect, useState } from "react";
import axios from "axios";
import PDFViewer from "./PDFViewer";

const FileUpload = () => {
  const [file, setFile] = useState();
  const [pdfUrl, setPdfUrl] = useState();

  const handleUpload = (e) => {
    const formdata = new FormData();
    formdata.append("file", file);
    axios
      .post("http://localhost:8000/upload", formdata)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/getpdf")
      .then((res) => {
        console.log(res.data[0].pdf);
        setPdfUrl(res.data[0].pdf);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="h-screen">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload PDF</button>
      <br />
      {/* <embed
        src={`http://localhost:8000/public/uploads/` + pdfUrl}
        type="application/pdf"
        frameBorder="0"
        height="100%"
        width="100%"
      /> */}
      <PDFViewer pdfUrl={`http://localhost:8000/upload/` + pdfUrl} />
    </div>
  );
};

export default FileUpload;
