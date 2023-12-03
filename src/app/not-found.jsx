import LogoHanikom from "@/components/LogoHanikom";

function notFound() {
  return (
    <div className="w-48 h-screen items-center m-auto">
      <LogoHanikom size={"full"} />
      <h4 className="text-center">Error 404</h4>
    </div>
  );
}

export default notFound;
