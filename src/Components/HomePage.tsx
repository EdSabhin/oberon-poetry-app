import { fetchData } from "@/service/fetch";
import React, { useEffect, useState } from "react";
import PoemCard from "./PoemCard";

interface Poem {
  title: string;
  author: string;
  lines: string[];
}

const HomePage = () => {
  const [poems, setPoems] = useState<any>([]);

  useEffect(() => {
    fetchData().then(setPoems);
  }, []);

  const poemsArray = poems.slice(0, 5);
  console.log(poemsArray);

  return (
    <>
      <header
        className="w-full flex flex-col items-center py-6
      bg-black text-white border-4 border-indigo-400 border-dashed"
      >
        <h1 className="text-5xl py-4">Sonnets by Shakespeare</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
          voluptates! Dolores, sint suscipit, quasi unde officiis, praesentium
          minima mollitia ab quas et impedit sed eveniet. Doloremque error
          quidem mollitia expedita.
        </h2>
      </header>
      <main
        className="w-full flex flex-col items-center py-6
      bg-black text-white"
      >
        <h2 className="text-5xl py-4">{"William's Den"}</h2>
        <section className="w-full flex flex-wrap justify-center gap-8 p-10">
          {poemsArray.map((poem: Poem, index: number) => {
            return (
              <PoemCard
                key={index}
                title={poem.title}
                author={poem.author}
                poem={poem.lines}
              />
            );
          })}
        </section>
      </main>
      <footer
        className="w-full flex flex-col items-center py-6
      bg-black text-white border-4 text-2xl border-indigo-400 border-dashed"
      >
        {"This is Shakespeare's foot."}
      </footer>
    </>
  );
};

export default HomePage;
