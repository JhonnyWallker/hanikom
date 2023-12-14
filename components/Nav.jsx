import Link from "next/link";

function Nav() {
  return (
    <>
      <ul className="text-center">
        <li className="font-bold text-xl m-5 text-blue">
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
        <li className="font-bold text-xl m-5 text-blue">
          <Link href={"/dashboard/seccion1"}>Tarjeta 1</Link>
        </li>
        <li className="font-bold text-xl m-5 text-blue">
          <Link href={"/dashboard/seccion1"}>Tarjeta 2</Link>
        </li>
        <li className="font-bold text-xl m-5 text-blue">
          <Link href={"/dashboard/seccion1"}>Tarjeta 3</Link>
        </li>
        <li className="font-bold text-xl m-5 text-blue">
          <Link href={"/dashboard/seccion1"}>Tarjeta 4</Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
