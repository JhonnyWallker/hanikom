import Link from "next/link";

function DropdownLink({ href, text, color }) {
  return (
    <>
      <Link
        href={href}
        key="settings"
        className={`text-sm hover:text-black cursor-pointer text-${color} hover:bg-gray rounded-lg p-2`}
      >
        {text}
      </Link>
    </>
  );
}

export default DropdownLink;
