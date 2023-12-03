import BotonBlue from "@/components/BotonBlue";
import BotonGray from "@/components/BotonGray";
import BotonTheme from "@/components/BotonTheme";
import LogoHanikom from "@/components/LogoHanikom";
import LogoSixVI from "@/components/LogoSixVI";

export default function Home() {
  return (
    <main className="h-screen">
      <section className="mx-96 flex justify-between">
        <div className="w-20 mt-3">
          <LogoHanikom size={"full"} />
        </div>
        <div className="mt-3">
          <BotonTheme />
        </div>
      </section>
      <section className="mt-20">
        <h1 className="font-bold text-8xl flex justify-center">
          Drive your web site
        </h1>
        <p className="max-w-3xl text-4xl text-gray-dark mx-auto mt-3 text-center">
          With hanikom you can generate content to be able to consume it from
          your website
        </p>

        <div className="flex justify-center mt-3">
          <div className="m-3">
            <BotonBlue texto={"Get Started"} link={"/dashboard"} />
          </div>
          <div className="m-3">
            <BotonGray texto={"Log in"} link={"/user"} />
          </div>
        </div>
      </section>
      <section className="absolute bottom-10 w-full flex justify-center">
        <div>
          <p className="text-gray-dark">© 2023 Hanikom v0.1</p>
          <div className="flex justify-center">
            <div className="w-20 flex justify-center">
              <h6>by</h6>
              <LogoSixVI />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
