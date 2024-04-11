"use client";
import { useState } from "react";

function Details({ children }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button
        className="bg-black text-white px-4 py-1 rounded"
        onClick={() => setToggle((toggle) => !toggle)}
      >
        Toggle
      </button>
      <div hidden={!toggle}>{children}</div>
    </div>
  );
}

export default Details;
