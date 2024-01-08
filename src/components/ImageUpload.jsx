import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/storage";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const storageRef = firebase.storage().ref(`images/${image.name}`);
    const uploadTask = storageRef.put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.error(error.message);
      },
      () => {
        storageRef.getDownloadURL().then((url) => {
          // Lưu url xuống database hoặc làm gì đó với url
          console.log(url);
        });
      }
    );
  };

  return (
    <div>
      <input type='file' onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      {progress > 0 && <progress value={progress} max='100' />}
    </div>
  );
};

export default ImageUpload;
