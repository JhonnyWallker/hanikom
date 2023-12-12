import Link from "next/link";

function NavLink({ href, text }) {
  return (
    <>
      <Link href={`${href}`}>{text}</Link>
    </>
  );
}

export default NavLink;
