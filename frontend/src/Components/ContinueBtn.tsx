import React from "react";

interface Btn {
  action: () => void;
}

function ContinueBtn(props: Btn) {
  //Deconstruct props
  const { action } = props;
  return (
    <div className="btn" onClick={action}>
      No Pause, go now!
    </div>
  );
}

export default ContinueBtn;
