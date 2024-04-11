import Link from "next/link";

async function Nav() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs");
  const pages = await res.json();
  return (
    <nav className="bg-brand px-4 py-2 text-white">
      <ul className="flex gap-2">
        <li>
          <Link href="/" prefetch={false}>
            Home
          </Link>
        </li>
        {/* <li>
          <Link href="/henry" prefetch={false}>
            Henry
          </Link>
        </li> */}
        {pages.map((page) => {
          return (
            <li key={page.id}>
              <Link href={`/dogs/${page.slug}`}>{page.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
