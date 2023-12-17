"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Nav() {
  const pathname = usePathname();

  return (
    <>
      <ul className="text-center">
        <li className="font-bold text-xl m-5">
          <Link
            href={"/dashboard"}
            className={pathname === "/dashboard" ? "text-pink text-2xl" : "text-blue"}
          >
            Dashboard
          </Link>
        </li>
        <li className="font-bold text-xl m-5">
          <Link
            href={"/dashboard/seccion1"}
            className={
              pathname === "/dashboard/seccion1" ? "text-pink text-2xl" : "text-blue"
            }
          >
            Tarjeta 1
          </Link>
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
