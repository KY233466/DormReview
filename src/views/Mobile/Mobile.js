import { useState } from "react";
// import { BottomSheet } from "../../components/BottomSheet";
import React from "react";

const Mobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      {/* <BottomSheet open={open}>My awesome content here</BottomSheet> */}
    </>
  );
};

export default Mobile;
