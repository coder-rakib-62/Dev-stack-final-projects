import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technology/Technologies";
import { Suspense } from "react";
import type { Itechnology } from "./types/technology";

const technologyFetch = async ():Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const technologyPromise = technologyFetch();
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<h2>Loading.......</h2>}>
        <Technologies technologyPromise={technologyPromise}></Technologies>
      </Suspense>
    </>
  );
}

export default App;
