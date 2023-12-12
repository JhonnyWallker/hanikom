import BotonTheme from "@/components/BotonTheme";
import CodeArea from "@/components/CodeArea";
import LogoHanikom from "@/components/LogoHanikom";
import Dropdown from "@/components/Dropdown";
import Support from "@/components/Support";
import Nav from "@/components/Nav";
import Link from "next/link";


function LayoutDashboard({ children }) {
  return (
    <div className="h-screen grid grid-cols-6 divide-x divide-gray-dark">
      <div className="h-screen grid grid-rows-4 divide-y divide-gray-dark">
        <div className="w-20 mt-3 m-auto">
          <Link href={"/dashboard"}>
            <LogoHanikom />
          </Link>
        </div>
        <div className="row-span-2 bg-gray w-full flex justify-center">
          <Nav />
        </div>
        <div>
          <Support />
        </div>
      </div>
      <div className="col-span-5 h-screen divide-y divide-gray-dark p-3">
        <div className="h-20 grid grid-cols-6 divide-x divide-gray-dark p-3">
          <div className="col-span-5 flex justify-end items-center">
            <div>
              <BotonTheme />
            </div>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Dropdown />
          </div>
        </div>
        <div className="h-auto grid grid-cols-6">
          <div className="col-span-4">
            <div className="p-3">{children}</div>
          </div>
          <div className="col-span-2 p-3">
            <CodeArea text={"npm install @nextui-org/hanikom"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutDashboard;
