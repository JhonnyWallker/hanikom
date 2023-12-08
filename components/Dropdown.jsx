import DropdownLink from "./DropdownLink";

export default function Dropdown() {
  return (
    <div>
      <div className="bg-white border border-gray-dark shadow-md p-10 rounded-lg z-10">
        <div key="profile" className="h-14 gap-2 text-md">
          <p className="font-bold">Signed in as</p>
          <p className="font-bold">@ferBermudez</p>
        </div>
        <div className="my-3">
          <DropdownLink
            href={"/editUser"}
            text={"Editar Usuario"}
            color={"gray-dark"}
          />
        </div>
        <div className="my-3">
          <DropdownLink
            href={"/configuraciones"}
            text={"Configuraciones"}
            color={"gray-dark"}
          />
        </div>
        <div className="my-3">
          <DropdownLink
            href={"/analisis"}
            text={"Análisis"}
            color={"gray-dark"}
          />
        </div>
        <div className="my-3">
          <DropdownLink
            href={"/sistema"}
            text={"Sistema"}
            color={"gray-dark"}
          />
        </div>
        <div className="my-3">
          <DropdownLink href={"/ayuda"} text={"Ayuda"} color={"gray-dark"} />
        </div>
        <div className="border-t-1 border-gray-dark py-3">
          <DropdownLink href={"/"} text={"Cerrar Sesión"} color={"red"} />
        </div>
      </div>
    </div>
  );
}
