import React from "react";

export const InputCheck = ({
  obj,
  headTitle,
  title,
  selectedSub,
  id,
  getInput,
  remove,
}) => {
  return (
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        id={`defaultUnchecked${id}`}
        checked={
          obj?.[selectedSub]?.[headTitle]
            ? obj[selectedSub][headTitle]?.indexOf(title) !== -1
              ? true
              : false
            : false
        }
      ></input>
      <label
        className="custom-control-label"
        for={`defaultUnchecked${id}`}
        onClick={
          obj?.[selectedSub]?.[headTitle]
            ? obj[selectedSub][headTitle]?.indexOf(title) === -1
              ? () => getInput(headTitle, title, selectedSub)
              : () => remove(headTitle, title, selectedSub)
            : () => getInput(headTitle, title, selectedSub)
        }
      >
        <span style={{ fontSize: "20px", fontWeight: "500" }}> {title}</span>
      </label>
    </div>
  );
};
