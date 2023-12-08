import NavLink from "./NavLink";

function Nav() {
  return (
    <>
      <ul className="text-center">
        <li className="font-bold text-xl m-5">
          <NavLink href={"/dashboard"} text={"Dashboard"} color={"blue"} />
        </li>
      </ul>
    </>
  );
}

export default Nav;
