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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      fetchData().then((data) => {
        setPoems(data);
        setLoading(false);
      });
    }, 4000);
  }, []);
  // Use .then((data)) => {} when fetch is conditioning
  // Otherwise use .then() directly

  const poemsArray = poems.slice(0, 5);
  console.log(poemsArray);

  return (
    <>
      <Header />
      <Main
        loading={loading}
        poemsArray={poemsArray}
        bgColor={bgColor}
        setBgColor={setBgColor}
      />
      <Footer />
    </>
  );
};

export default HomePage;
