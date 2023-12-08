import Link from "next/link";

function NavLink({ href, text, color }) {
  return (
    <>
      <Link href={`${href}`} className={`text-${color}`}>
        {text}
      </Link>
    </>
  );
}

export default NavLink;
