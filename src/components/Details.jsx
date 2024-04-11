"use client";
import { useState } from "react";

function Details() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button
        className="bg-black text-white px-4 py-1 rounded"
        onClick={() => setToggle((toggle) => !toggle)}
      >
        Toggle
      </button>
      <div hidden={!toggle}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius id enim
          consectetur sit perspiciatis hic nemo harum officiis laudantium animi!
        </p>
      </div>
    </div>
  );
}

export default Details;
