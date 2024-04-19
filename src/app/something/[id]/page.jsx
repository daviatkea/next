export const dynamicParams = false;

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default function Item({ params: { id } }) {
  return (
    <div>
      <h1>Heading {id}</h1>
    </div>
  );
}
