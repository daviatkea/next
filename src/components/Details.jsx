"use client";
import { useState } from "react";
import Button from "./Button";

function Details({ children }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <Button onClick={() => setToggle((toggle) => !toggle)}>Toggle</Button>
      <div hidden={!toggle}>{children}</div>
    </div>
  );
}

export default Details;
