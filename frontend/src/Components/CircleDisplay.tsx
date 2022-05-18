import React from "react";
import CircleSegment from "./CircleSegment";

interface CircleDisplayProps {
  progress: number;
}

function CircleDisplay(props: CircleDisplayProps) {
  const { progress } = props;
  const circleDisplayStyle = {
    width: "280px",
    height: "280px",
    position: "relative",
  };
  return (
    <div style={circleDisplayStyle}>
      <CircleSegment
        size={100}
        active={progress > 90 ? true : false}
        zIndex={10}
        top={0}
        left={0}
      />
      <CircleSegment
        size={90}
        active={progress > 80 && !(progress > 90) ? true : false}
        zIndex={10}
        top={5}
        left={5}
      />
      <CircleSegment
        size={80}
        active={progress > 70 && !(progress > 80) ? true : false}
        zIndex={10}
        top={10}
        left={10}
      />
      <CircleSegment
        size={70}
        active={progress > 60 && !(progress > 70) ? true : false}
        zIndex={10}
        top={15}
        left={15}
      />
      <CircleSegment
        size={60}
        active={progress > 50 && !(progress > 60) ? true : false}
        zIndex={10}
        top={20}
        left={20}
      />
      <CircleSegment
        size={50}
        active={progress > 40 && !(progress > 50) ? true : false}
        zIndex={10}
        top={25}
        left={25}
      />
      <CircleSegment
        size={40}
        active={progress > 30 && !(progress > 40) ? true : false}
        zIndex={10}
        top={30}
        left={30}
      />
      <CircleSegment
        size={30}
        active={progress > 20 && !(progress > 30) ? true : false}
        zIndex={10}
        top={35}
        left={35}
      />
      <CircleSegment
        size={20}
        active={progress > 10 && !(progress > 20) ? true : false}
        zIndex={10}
        top={40}
        left={40}
      />
      <CircleSegment
        size={10}
        active={progress > 0 && !(progress > 10) ? true : false}
        zIndex={10}
        top={45}
        left={45}
      />
    </div>
  );
}

export default CircleDisplay;
