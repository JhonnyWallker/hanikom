import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLifeRing } from "@fortawesome/free-solid-svg-icons";

function Support() {
  return (
    <>
      <ul className="text-center">
        <li className="text-gray-dark font-bold text-lg m-5">Support</li>
        <li className="text-gray-dark text-sm flex justify-center hover:text-blue-dark cursor-pointer">
          <div className="w-5 mr-1">
            <FontAwesomeIcon icon={faLifeRing} />
          </div>
          Help Center
        </li>
        <li className="text-gray-dark text-sm m-5">Doc</li>
        <p className="text-gray-dark text-xs">© 2023 Hanikom v0.1</p>
      </ul>
    </>
  );
}

export default Support;
