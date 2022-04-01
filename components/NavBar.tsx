import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex lowercase">
      <span>
        <Link href="/">
          <a className="font-bold">Home</a>
        </Link>
      </span>
      <span className="ml-4">
        <Link href="/categories">
          <a className="font-bold">Categories</a>
        </Link>
      </span>
    </div>
  );
}
