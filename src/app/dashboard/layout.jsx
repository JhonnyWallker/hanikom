"use client";

import BotonBlue from "@/components/BotonBlue";
import BotonTheme from "@/components/BotonTheme";
import CodeArea from "@/components/CodeArea";
import LogoHanikom from "@/components/LogoHanikom";
import UserLocal from "@/components/UserLocal";
import { useState, useEffect } from "react";
import Dropdown from "@/components/Dropdown";
import Support from "@/components/Support";
import Nav from "@/components/Nav";

function LayoutDashboard({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const closeMenu = () => {
        setIsOpen(false);
      };

      window.addEventListener("click", closeMenu);

      return () => window.removeEventListener("click", closeMenu);
    }
  }, [isOpen]);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen grid grid-cols-6 divide-x divide-gray-dark">
      <div className="h-screen grid grid-rows-4 divide-y divide-gray-dark">
        <div>
          <div className="w-20 mt-3 m-auto">
            <LogoHanikom />
          </div>
          
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
          <div
            className="col-span-1 flex justify-center items-center"
            onClick={toggleMenu}
          >
            <UserLocal />
          </div>
        </div>
        <div className="h-auto grid grid-cols-6">
          <div className="col-span-4">
            <div className="p-3">{children}</div>
            {isOpen && (
              <div onClick={(event) => event.stopPropagation()}>
                {
                  <div className="absolute top-20 right-60 divide divide-white">
                    <Dropdown />
                  </div>
                }
              </div>
            )}
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
