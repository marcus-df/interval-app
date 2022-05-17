import React from "react";

function ContinueBtn(props) {
  //Deconstruct props
  const { action } = props;
  return (
    <div classname="btn" onClick={action}>
      No Pause, go now!
    </div>
  );
}

export default ContinueBtn;
