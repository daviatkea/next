"use server";

import Button from "@/components/Button";

export async function Popover({ children, id, title, type = "auto", ...rest }) {
  console.log(rest);
  return (
    <div
      popover={type}
      id={id}
      className="m-auto bg-green-300 p-4 max-w-2xl rounded-lg [&_p]:text-green-800 [&_p+p]:mt-2 [&>p]:italic"
    >
      <Button popovertarget={id} popovertargetaction="hide" theme={rest.theme}>
        <span aria-hidden="true">&times;</span>
        <span className="sr-only">Close Popover</span>
      </Button>
      <h2 className="text-xl font-bold [&:has(+*)]:mb-2 mt-4">{title}</h2>
      {children}
    </div>
  );
}
