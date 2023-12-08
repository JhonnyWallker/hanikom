import NavLink from "./NavLink";

function Nav() {
  return (
    <>
      <ul className="text-center">
        <li className="font-bold text-xl m-5">
          <NavLink href={"/dashboard"} text={"Dashboard"} color={"blue"} />
        </li>
        <li className="text-lg m-5">
          <NavLink
            href={"/dashboard/seccion1"}
            text={"Sección 1"}
            color={"blue"}
          />
        </li>
        <li className="text-lg m-5">
          <NavLink
            href={"/dashboard/seccion2"}
            text={"Sección 2"}
            color={"blue"}
          />
        </li>
        <li className="text-lg m-5">
          <NavLink
            href={"/dashboard/seccion3"}
            text={"Sección 3"}
            color={"blue"}
          />
        </li>
      </ul>
    </>
  );
}

export default Nav;
