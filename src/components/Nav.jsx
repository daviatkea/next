import Link from "next/link";

function Nav() {
  return (
    <nav className="bg-brand px-4 py-2 text-white">
      <ul className="flex gap-2">
        <li>
          <Link href="/" prefetch={false}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/henry" prefetch={false}>
            Henry
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
