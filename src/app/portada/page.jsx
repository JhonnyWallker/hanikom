import BotonBlue from "@/components/BotonBlue";
import LogoHanikom from "@/components/LogoHanikom";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Portada() {
  return (
    <div className="h-screen w-screen flex justify-between items-center">
      <div className="mx-20 grid grid-cols-2">
        <div className="w-20">
          <LogoHanikom />
        </div>
        <div className="flex items-center">
          <p className="font-bold">
            Para registrarte presiona{" "}
            <Link href="#" className="text-pink">
              aquí
            </Link>
            <FontAwesomeIcon icon={faArrowRight} />
          </p>
          
            
          
        </div>
      </div>
      <div className="mx-20">
        <BotonBlue link={"/dashboard"} texto={"Log in"} />
      </div>
    </div>
  );
}

export default Portada;
