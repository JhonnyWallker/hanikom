import BotonBlue from "../../components/BotonBlue";
import BotonGray from "../../components/BotonGray";
import LogoHanikom from "../../components/LogoHanikom";

export default function Home() {
  return (
    <main >

      <section className="mx-96">
        <div className="w-20 mt-3">
          <LogoHanikom size={"full"} />
        </div>
      </section>
      <section className="h-screen mt-20">

        <h1 className="font-bold text-8xl flex justify-center">Drive your web site</h1>
        <p className="max-w-3xl text-4xl text-gray-dark mx-auto mt-3 text-center">With hanikom you can generate
          content to be able to consume it
          from your website</p>

        <div className="flex justify-center mt-3">
          <div className="m-3">
            <BotonBlue texto={"Get Started"} link={"/dashboard"} />
          </div>
          <div className="m-3">
            <BotonGray texto={"Log in"} link={"/user"} />
          </div>
        </div>
      </section>


    </main>
  )
}
