import Link from "next/link"


function BotonBlue({ texto, link }) {
    return (
        <>
            <Link href={link} className="text-white w-auto p-3 rounded-xl bg-blue">{texto}</Link>
        </>
    )
}

export default BotonBlue