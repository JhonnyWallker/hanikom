import Link from "next/link";

export default function Dropdown() {
  return (
    <div>
      <div className="bg-gray p-10 rounded-lg z-10">
        <div key="profile" className="h-14 gap-2 text-md">
          <p className="font-bold">Signed in as</p>
          <p className="font-bold">@ferBermudez</p>
        </div>
        <div>
          <Link
            href="/user"
            key="settings"
            className="hover:text-black cursor-pointer text-gray-dark"
          >
            Configuración
          </Link>
        </div>
        <div>
          <Link
            href="/user"
            key="team_settings"
            className="hover:text-black cursor-pointer text-gray-dark"
          >
            Team Settings
          </Link>
        </div>
        <div>
          <Link
            href="/user"
            key="analytics"
            className="hover:text-black cursor-pointer text-gray-dark"
          >
            Analytics
          </Link>
        </div>
        <div>
          <Link
            href="/user"
            key="system"
            className="hover:text-black cursor-pointer text-gray-dark"
          >
            System
          </Link>
        </div>
        <div>
          <Link
            href="/user"
            key="configurations"
            className="hover:text-black cursor-pointer text-gray-dark"
          >
            Configurations
          </Link>
        </div>
        <div>
          <Link
            href="/user"
            key="help_and_feedback"
            className="hover:text-black cursor-pointer text-gray-dark"
          >
            Help & Feedback
          </Link>
        </div>
        <div className="border-t-1 border-gray-dark">
          <Link
            href="/user"
            key="logout"
            color="danger"
            className="hover:text-black cursor-pointer text-red"
          >
            Cerrar Sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
