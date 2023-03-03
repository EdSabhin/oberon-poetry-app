import { fetchData } from "@/service/fetch";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export interface Poem {
  title: string;
  author: string;
  lines: string[];
}

const HomePage = () => {
  const [poems, setPoems] = useState<any>([]);
  const [bgColor, setBgColor] = useState<boolean>(false);

  useEffect(() => {
    fetchData().then(setPoems);
  }, []);

  const poemsArray = poems.slice(0, 5);
  console.log(poemsArray);

  return (
    <>
      <Header />
      <Main poemsArray={poemsArray} bgColor={bgColor} setBgColor={setBgColor} />
      <Footer />
    </>
  );
};

export default HomePage;
