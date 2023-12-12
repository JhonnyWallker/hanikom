"use client";

import Usuario from "./Usuario";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPen,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("click", hidenMenu);

    return () => {
      window.removeEventListener("click", hidenMenu);
    };
  }, []);

  const showMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const hidenMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div onClick={showMenu}>
        <Usuario />
      </div>
      {isOpen && (
        <div className="bg-white border border-gray-dark shadow-md p-10 rounded-lg z-10 absolute">
          <div key="profile" className="h-14 gap-2 text-md">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">@ferBermudez</p>
          </div>
          <div className="my-3 text-gray-dark">
            <Link
              href={"/perfil"}
              key="settings"
              className={`text-sm hover:text-black cursor-pointer hover:bg-gray rounded-lg p-2 flex justify-center`}
            >
              <div className="mr-1">
                <FontAwesomeIcon icon={faUserPen} />
              </div>
              Editar Perfil
            </Link>
          </div>

          <div className="border-t-1 border-gray-dark py-3 text-red">
            <Link
              href={"/"}
              key="settings"
              className={`text-sm hover:text-black cursor-pointer hover:bg-gray rounded-lg p-2 flex justify-center`}
            >
              <div className="mr-1">
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </div>
              Cerrar Sesión
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
