'use client'
// import useLenisScroll from "@/hooks/useLenisScroll";
import HomeHero from "@/components/ui/HomeHero";
// import HomeService from "@/components/ui/HomeService";
// import HomeSelectedWork from "@/components/ui/HomeSelectedWork";

const Home = () => {
  // useLenisScroll();

  return (
    <main className="">
      <section className="">
        <HomeHero />
      </section>

      <section>
        {/* <HomeService /> */}
      </section>

      <section>
        {/* <HomeSelectedWork /> */}
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
