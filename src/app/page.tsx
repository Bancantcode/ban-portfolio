'use client'
import Button from "@/components/ui/Button";
import Certificates from "@/components/ui/Certificates";

const Home = () => {
  return (
    <main>
      <h1>Under Construction...</h1>
      <Certificates />
      <a href="https://drive.google.com/drive/folders/1Hq6q05aRXy430aGIQlxTZ8GJ6zbwJdeb?usp=sharing" target="_blank">
        <Button id="nav-btn" title={`View Certificates`} containerClass="" />
      </a>
    </main>
  );
}

export default Home
