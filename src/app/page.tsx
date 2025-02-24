import useLenisScroll from "@/hooks/useLenisScroll";
import HomeHero from "@/components/ui/HomeHero";
import HomeService from "@/components/ui/HomeService";
import HomeSelectedWork from "@/components/ui/HomeSelectedWork";

const Home = () => {
  useLenisScroll();

  return (
    <main className="">
      <div className="h-screen flex justify-center items-center">
        <HomeHero />
        <h1>Hero</h1>
      </div>

      <section className="h-screen flex justify-center items-center">
        <HomeService />
        <h1>Services</h1>
      </section>

      <section className="h-screen flex justify-center items-center">
        <HomeSelectedWork />
        <h1>Selected Works</h1>
      </section>

      <section className="h-screen flex justify-center items-center">
        <h1>About Call to action</h1>
      </section>

      <section className="h-screen flex justify-center items-center">
        <h1>Testimonials</h1>
      </section>

      <section className="h-screen flex justify-center items-center">
        <h1>Contact Call to action</h1>
      </section>
    </main>
  );
}

export default Home
