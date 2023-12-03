import LogoHanikom from "@/components/LogoHanikom";

function LayoutDashboard({ children }) {
  return (
    <div className="h-screen grid grid-cols-6 divide-x divide-gray-dark">
      <div className="h-screen grid grid-rows-4 divide-y divide-gray-dark">
        <div className="w-20 mt-3 m-auto">
          <LogoHanikom />
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
          </ul>
        </div>
      </div>
      <div className="col-span-5 h-screen">{children}</div>
    </div>
  );
}

export default LayoutDashboard;
