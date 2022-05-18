import React from "react";

interface SegmentProps {
  size: number;
  active: boolean;
  zIndex: number;
  top: number;
  left: number;
}

function CircleSegment(props: SegmentProps) {
  const { size, active, zIndex, top, left } = props;
  const segmentStyle = {
    border: "1px solid black",
    borderRadius: "50%",
    height: `${size}%`,
    width: `${size}%`,
    position: "absolute",
    backgroundColor: `${active ? "gray" : "white"}`,
    top: `${top}%`,
    left: `${left}%`,
    animation: `${active ? "fade-in 1s infinite alternate linear" : ""}`,
  };
  return <div style={segmentStyle}></div>;
}

export default CircleSegment;
