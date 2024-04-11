import Image from "next/image";

async function getHenry() {
  const response = await fetch(
    "https://nice-dogs.vercel.app/api/dogs?slug=henry"
  );
  const data = response.json();
  return data;
}

export async function generateMetadata() {
  const { name, age } = await getHenry();
  return {
    title: name,
    description: `${name} is ${age} years old`,
  };
}

export default async function HenryPage() {
  const data = await getHenry();
  //   console.log(data);
  return (
    <>
      <h1>Hi {data.name}</h1>
      <p>
        His favourite color is{" "}
        <span className="bg-yellow-300">{data.favouriteColor}</span>
      </p>
      <div className="grid md:grid-cols-3 gap-2">
        {[...new Array(3)].map((_, i) => (
          <figure key={i}>
            <Image
              src={data.image.url}
              width={data.image.width}
              height={data.image.height}
              priority={true}
              alt="Picture of the author"
              sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         400px"
            />
          </figure>
        ))}
      </div>
    </>
  );
}
