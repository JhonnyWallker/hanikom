import Link from "next/link"


function BotonGray({ texto, link }) {
    return (
        <>
            <Link href={link} className="text-black w-auto p-3 rounded-xl bg-gray-dark">{texto}</Link>
        </>
    )
}

export default BotonGray