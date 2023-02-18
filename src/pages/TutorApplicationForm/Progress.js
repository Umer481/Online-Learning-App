import React, { useState } from "react";

export const Progress = (props) => {
  const [state, updateState] = useState({
    isActiveClass: "",
    timeout: null,
  });

  useEffect(() => {
    const { timeout } = state;

    if (props.isActive && !timeout) {
      updateState({
        isActiveClass: styles.loaded,
        timeout: setTimeout(() => {
          props.nextStep();
        }, 3000),
      });
    } else if (!props.isActive && timeout) {
      clearTimeout(timeout);
      updateState({
        isActiveClass: "",
        timeout: null,
      });
    }
  });

  return (
    <div className={styles["progress-wrapper"]}>
      <p className="text-center">Automated Progress...</p>
      <div className={`${styles.progress} ${state.isActiveClass}`}>
        <div className={`${styles["progress-bar"]} progress-bar-striped`} />
      </div>
    </div>
  );
};
