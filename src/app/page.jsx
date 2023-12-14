import BotonBlue from "@/components/BotonBlue";
import BotonGray from "@/components/BotonGray";
import BotonTheme from "@/components/BotonTheme";
import LoginForm from "@/components/LoginForm";
import LogoHanikom from "@/components/LogoHanikom";
import LogoSixVI from "@/components/LogoSixVI";

export default function Home() {
  return (
    <main className="h-screen">
      <section className="mx-3 md:mx-30 flex justify-between">
        <div className="w-20 mt-3">
          <LogoHanikom size={"full"} />
        </div>
        <div className="mt-3">
          <BotonTheme />
        </div>
      </section>
      <section className="mt-20">
        <h1 className="font-bold text-center text-5xl md:text-7xl">
          Drive your web site
        </h1>
        <p className="max-w-3xl text-2xl md:text-4xl text-gray-dark mx-auto mt-3 text-center">
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
        <div className="flex justify-center mt-5">
          <iframe src="https://lottie.host/embed/098d4529-4e3a-4da1-bcb4-b13c88eff456/8rZfWDtK2K.json"></iframe>
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
      <LoginForm />
    </main>
  );
}
