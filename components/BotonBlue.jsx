import Link from "next/link";

function BotonBlue({ texto, link }) {
  return (
    <>
      <Link
        href={link}
        className="text-white w-full p-3 rounded-xl bg-blue hover:bg-blue-dark"
      >
        {texto}
      </Link>
    </>
  );
}

export default BotonBlue;
