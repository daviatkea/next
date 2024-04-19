"use server";

import Button from "@/components/Button";
import Details from "@/components/Details";
import { Popover } from "../components/Popover";

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

      <section className="p-4">
        <Button theme="brand" popovertarget="pop">
          Toggle Popup!
        </Button>

        <Popover id="pop" title="Popover Title" theme="brand">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius id
            enim consectetur sit perspiciatis hic nemo harum officiis laudantium
            animi!
          </p>
          <p>Lorem ipsum dolor sit.</p>
        </Popover>
      </section>
    </>
  );
}
