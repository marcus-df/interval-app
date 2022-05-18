import React from "react";

interface SegmentProps {
  size: number;
  active: boolean;
  zIndex: number;
}

function CircleSegment(props: SegmentProps) {
  const segmentStyle = {
    border: "1px solid black",
    borderRadius: "50%",
    height: `${props.size}`,
  };
  return <div></div>;
}

export default CircleSegment;
