"use server";

import Details from "@/components/Details";

export default async function Home() {
  return (
    <>
      <h1 className="text-slate-900 text-2xl">Hello world!</h1>

      <section className="p-10 bg-amber-200">
        <Details />
      </section>
    </>
  );
}
