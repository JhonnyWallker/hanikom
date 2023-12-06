import BotonBlue from "@/components/BotonBlue";
import BotonTheme from "@/components/BotonTheme";
import LogoHanikom from "@/components/LogoHanikom";
import Search from "@/components/Search";
import UserLocal from "@/components/UserLocal";

function LayoutDashboard({ children }) {
  return (
    <div className="h-screen grid grid-cols-6 divide-x divide-gray-dark">
      <div className="h-screen grid grid-rows-4 divide-y divide-gray-dark">
        <div>
          <div className="w-20 mt-3 m-auto">
            <LogoHanikom />
          </div>
          <div className="flex justify-center mt-5">
            <BotonBlue link={"/"} texto={"Add +"} />
          </div>
        </div>
        <div className="row-span-2 bg-gray w-full flex justify-center">
          <ul className="text-center">
            <li className="text-blue font-bold text-xl m-5">Dashboard</li>
            <li className="text-blue text-lg m-5">sección 1</li>
            <li className="text-blue text-lg m-5">sección 2</li>
            <li className="text-blue text-lg m-5">sección 3</li>
          </ul>
        </div>
        <div>
          <ul className="text-center">
            <li className="text-gray-dark font-bold text-lg m-5">Support</li>
            <li className="text-gray-dark text-sm m-5">Help Center</li>
            <li className="text-gray-dark text-sm m-5">Doc</li>
            <p className="text-gray-dark text-xs">© 2023 Hanikom v0.1</p>
          </ul>
        </div>
      </div>
      <div className="col-span-5 h-screen divide-y divide-gray-dark p-3">
        <div className="h-20 grid grid-cols-6 divide-x divide-gray-dark p-3">
          <div className="col-span-5 flex justify-end items-center">
            <div>
              <BotonTheme />
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <UserLocal />
          </div>
        </div>
        <div className="h-auto grid grid-cols-6">
          <div className="col-span-4 divide-y divide-gray-dark">
            <div className="h-20 flex items-center justify-between">
              <h3 className="text-4xl font-bold">Dashboard</h3>
              <Search/>
            </div>
            <div className="p-3">{children}</div>
          </div>
          <div className="col-span-2">vacío</div>
        </div>
      </div>
    </div>
  );
}

export default LayoutDashboard;
