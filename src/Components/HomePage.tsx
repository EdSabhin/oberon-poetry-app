import { fetchData } from "@/service/fetch";
import React, { useEffect, useState } from "react";
import PoemCard from "./PoemCard";
import Footer from "./Footer";

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
      bg-gradient-to-r from-yellow-800 to-green-300 bg-black text-white border-4 border-green-200 border-dashed"
      >
        <h1 className="text-5xl py-4 underline">On Shakespeare</h1>
        <h2 className="px-6 pt-8 pb-6">
          {`William Shakespeare's genius lies in his ability to capture the
          complexities of human emotions and motivations, and convey them
          through his characters' words and actions. His works demonstrate an
          unparalleled mastery of language and poetic form, showcasing his
          ability to create vivid imagery and use language to delightfully
          express a wide range of ideas and emotions. Shakespeare's works have
          endured for centuries because of their universal themes and enduring
          relevance, which continue to resonate with audiences today. His legacy
          has had a profound impact on the English language and literature, and
          his plays continue to be celebrated as some of the greatest works of
          art in human history.`}
        </h2>
      </header>
      <main
        className="w-full flex flex-col items-center py-6
      bg-gradient-to-r from-yellow-800 to-green-200 text-white"
      >
        <h2 className="text-5xl py-4">{"William's Den of Sonnets"}</h2>
        <section className="w-full flex flex-wrap justify-center gap-12 p-10">
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
      <Footer />
    </>
  );
};

export default HomePage;
