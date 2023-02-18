import React from "react";
import { useState, useCallback } from "react";
import TargetBox from "./TargetBox";

const Container = ({
  TargetChildComponent,
  updateImageUrl,
  imageUrl,
  typeNo,
  errorMessagehandling,
  certificateError,
  ImageUploadAction,
  uploadedImage,
  iscompletedForm
}) => {
  const [droppedFiles, setDroppedFiles] = useState([]);
  const handleFileDrop = useCallback((item, monitor) => {
    if (monitor) {
      const files = monitor.getItem().files;
      if (typeNo === "3") {
        if (files[0].type === "application/pdf")
          ImageUploadAction(files[0]);
      }
      setDroppedFiles(files);
    }
  }, []);

  const uploadfileManually = (e) => {
    setDroppedFiles(e.target.files);
  };
  return (
    <>
      <TargetBox
        onDrop={handleFileDrop}
        files={droppedFiles}
        uploadfileManually={uploadfileManually}
        TargetChildComponent={TargetChildComponent}
        updateImageUrl={updateImageUrl}
        imageUrl={imageUrl}
        typeNo={typeNo}
        errorMessagehandling={errorMessagehandling}
        certificateError={certificateError}
        uploadedImage={uploadedImage}
        iscompletedForm={iscompletedForm}
      />
    </>
  );
};
export default Container;
