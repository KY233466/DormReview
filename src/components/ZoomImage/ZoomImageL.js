import React, { useRef, useState } from "react";

const ImageZoomS = ({ image }) => {
  const imageRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [lastX, setLastX] = useState(null);
  const [lastY, setLastY] = useState(null);

  const handleMouseDown = (e) => {
    setLastX(e.clientX);
    setLastY(e.clientY);
  };

  const handleMouseMove = (e) => {
    if (lastX !== null && lastY !== null) {
      const deltaX = e.clientX - lastX;
      const deltaY = e.clientY - lastY;
      setTranslateX((prev) => prev + deltaX);
      setTranslateY((prev) => prev + deltaY);
      setLastX(e.clientX);
      setLastY(e.clientY);
    }
  };

  const handleMouseUp = () => {
    setLastX(null);
    setLastY(null);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    const newScale = scale + delta;
    if (newScale > 0.1 && newScale < 10) {
      setScale(newScale);
    }
  };

  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        ref={imageRef}
        src={image}
        alt="Zoomable"
        style={{
          transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
      />
    </div>
  );
};

export default ImageZoomS;
