import NavLink from "./NavLink";

function Nav() {
  return (
    <>
      <ul className="text-center">
        <li className="font-bold text-xl m-5 text-blue">
          <NavLink href={"/dashboard"} text={"Dashboard"} />
        </li>
        <li className="font-bold text-xl m-5 text-blue">
          <NavLink href={"/dashboard/seccion1"} text={"Card 1"} />
        </li>
        <li className="font-bold text-xl m-5 text-blue">
          <NavLink href={"/dashboard/seccion1"} text={"Card 2"} />
        </li>
        <li className="font-bold text-xl m-5 text-blue">
          <NavLink href={"/dashboard/seccion1"} text={"Card 3"} />
        </li>
        <li className="font-bold text-xl m-5 text-blue">
          <NavLink href={"/dashboard/seccion1"} text={"Card 4"} />
        </li>
      </ul>
    </>
  );
}

export default Nav;
