import { useState } from "react";
import { BottomSheet } from "../../components/BottomSheet/BottomSheet.tsx";
import React from "react";

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  //   const [open, setOpen] = useState(false);
  return (
    <>
      <button
        title="Toggle BottomSheet"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      ></button>
      <BottomSheet
        title="Harleston Hall"
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <div>X</div>
        {/* <DemoChild>{generatePlaceholderContent(3000).join(", ")}</DemoChild> */}
      </BottomSheet>
    </>
  );
};

export default Mobile;
