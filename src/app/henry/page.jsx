async function getHenry() {
  const response = await fetch(
    "https://nice-dogs.vercel.app/api/dogs?slug=henry"
  );
  const data = response.json();
  return data;
}

export default async function HenryPage() {
  const data = await getHenry();
  console.log(data);
  return (
    <main>
      <h1>Hi {data.name}</h1>
      <p>
        His favourite color is{" "}
        <span className="bg-yellow-300">{data.favouriteColor}</span>
      </p>
    </main>
  );
}
