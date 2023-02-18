import React from 'react';

export const InputCheckForQualification = ({ obj, headTitle, title, id, getInput ,remove}) => {
    return (
        <div class="custom-control custom-checkbox" >
            <input
                type="checkbox"
                class="custom-control-input"
                id={`defaultUnchecked${id}`}
                checked={obj[headTitle]?.indexOf(title) !== -1 ? true : false}
            ></input>
            <label
                class="custom-control-label"
                for={`defaultUnchecked${id}`}
                onClick={obj[headTitle]?.indexOf(title) === -1 ? () => getInput(headTitle, title) : () => remove(headTitle, title)}
            >
                <span style={{ fontSize: "20px", fontWeight: "500" }}> {title}</span>
            </label>
        </div >)
}