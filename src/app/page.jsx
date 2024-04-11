"use server";

import Details from "@/components/Details";

function Popover({ children, id, type = "auto" }) {
  return (
    <div popover={type} id={id}>
      <button popovertarget={id} popovertargetaction="hide">
        <span aria-hidden="true">&times;</span>
        <span className="sr-only">Close Popover</span>
      </button>
      {children}
    </div>
  );
}

export default async function Home() {
  return (
    <>
      <h1 className="text-slate-900 text-2xl">Hello world!</h1>

      <section className="p-10 bg-amber-200">
        <Details>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius id
            enim consectetur sit perspiciatis hic nemo harum officiis laudantium
            animi!
          </p>
        </Details>
      </section>

      <section>
        <button popovertarget="popover1">Toggle Popup!</button>
        <Popover id="popover1">
          <h2>Popover 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius id
            enim consectetur sit perspiciatis hic nemo harum officiis laudantium
            animi!
          </p>
        </Popover>
      </section>
    </>
  );
}
