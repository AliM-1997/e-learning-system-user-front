import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FileList.css";

const FileList = () => {
  const [files, setFiles] = useState([]);

  // Fetch list of files
  const fetchFiles = async () => {
    try {
      const response = await axios.get("http://localhost:8000/file");
      setFiles(response.data);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="file-list">
      <h2>Available Files</h2>
      <ul>
        {files.map((file) => (
          <li key={file._id}>
            <a
              href={`http://localhost:8000/file/download/${file._id}`} // Adjust this URL as needed
              download
            >
              {file.filename}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
