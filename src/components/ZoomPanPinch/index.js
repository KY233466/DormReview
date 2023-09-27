// import src from "../../assets/floor/Harleston/1Harleston.png";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ZoomPanPinch = ({ src }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        cursor: "grab",
      }}
    >
      <TransformWrapper
        initialScale={0.9}
        initialPositionY={10}
        limitToBounds={true}
        centerZoomedOut={true}
        centerOnInit={true}
        wheel={{ step: 0.5, smoothStep: 0.01 }}
      >
        <TransformComponent>
          <img
            style={{
              width: "100vw",
              height: "100vh",
              objectFit: "contain",
            }}
            src={src}
            alt="floor plan"
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default ZoomPanPinch;
