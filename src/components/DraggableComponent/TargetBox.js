import React, { useEffect, useRef, useState } from "react";
import { NativeTypes } from "react-dnd-html5-backend";
import { useDrop } from "react-dnd";
import { uploadImage } from "./../../apis/tutors";

const TargetBox = (props) => {
  const {
    onDrop,
    files,
    TargetChildComponent,
    updateImageUrl,
    errorMessagehandling,
    certificateError,
    uploadedImage,
    iscompletedForm,
  } = props;
  const [count, setCount] = useState({
    loader: false,
  });
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: [NativeTypes.FILE],
    drop(item, monitor) {
      if (onDrop) {
        onDrop(props, monitor);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevFile = usePrevious({ files });
  useEffect(() => {
    const { typeNo } = props;
    let token = JSON.parse(localStorage.getItem("userDetail"));
    token = `Bearer ${token?.token}`;
    if (!iscompletedForm && prevFile?.files !== files) {
      const image = files[0];
      let formdata = new FormData();
      formdata.append("image", image);
      if (image && typeNo) {
        setCount({
          ...count,
          loader: true,
        });
        if (typeNo === "3") {
          if (image.type === "application/pdf") {
            uploadImage({ token, typeNo, file: formdata })
              .then((res) => {
                setCount({
                  ...count,
                  loader: false,
                });
                if (res.data.message === "image uploaded successfully") {
                  updateImageUrl(res.data.uploadImagePath);
                }
              })
              .catch((err) =>
                setCount({
                  ...count,
                  loader: false,
                })
              );
          } else {
            errorMessagehandling(true);
            setCount({
              ...count,
              loader: false,
            });
          }
        } else {
          uploadImage({ token, typeNo, file: formdata })
            .then((res) => {
              setCount({
                ...count,
                loader: false,
              });
              if (res.data.message === "image uploaded successfully") {
                updateImageUrl(res.data.uploadImagePath);
              }
            })
            .catch((err) =>
              setCount({
                ...count,
                loader: false,
              })
            );
        }
      } else {
        if (image)
          errorMessagehandling(
            "Please select type of document before uploading"
          );
      }
    }
  }, [files]);

  const isActive = canDrop && isOver;
  const { imageUrl } = props;
  const { loader } = count;
  return (
    <div ref={drop}>
      <TargetChildComponent
        imageUrl={imageUrl}
        files={files}
        isActive={isActive}
        uploadfileManually={props.uploadfileManually}
        loader={loader}
        shakeActive={certificateError}
        uploadedImage={uploadedImage}
        iscompletedForm={iscompletedForm}
      />
    </div>
  );
};
export default TargetBox;
