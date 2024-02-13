import { fetchData } from "@/service/fetch";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from "@/Components/Header";
import LoadingImage from "@/Components/LoadingImage";
import MusicPlayer from "@/Components/MusicPlayer";
import { songData } from "@/service/songData";

type Props = {
  title: string;
};

const DickinsonTitles = (props: Props) => {
  const [titles, setTitles] = useState<any>();
  const [bgColor, setBgColor] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      fetchData("https://poetrydb.org/author/Emily%20Dickinson/title").then(
        (data) => {
          setTitles(data);
          setLoading(false);
        }
      );
    }, 3000);
  }, []);

  // Use .then((data)) => {} when fetch is conditioning
  // Otherwise use .then() directly
  return (
    <div>
      <Navbar />
      <Header
        title="Emily's Greatest Hits"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus non omnis tempore iure numquam incidunt voluptatem a repellat, dolores corporis quasi. Quisquam id sed numquam voluptates inventore maxime accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laborum possimus placeat nulla incidunt, iste sint perferendis quaerat corporis dolor molestias, unde, odio tenetur eveniet ipsam? Quo modi repellat esse?"
      />
      <MusicPlayer songs={songData} />
      {loading ? (
        <div className="w-full flex justify-center">
          <LoadingImage image="/feather-pen.png" />
        </div>
      ) : (
        <section className="w-full grid grid-cols-2 gap-x-4 gap-y-8 px-36 py-16">
          {titles.slice(0, 32).map((title: Props, index: number) => {
            return (
              <div
                key={index}
                className="w-full flex items-center justify-center "
              >
                <h3 className="text-3xl">{title.title}</h3>
              </div>
            );
          })}
        </section>
      )}

      <Footer
        text={"Emily's Footer Extravaganza"}
        image={
          "https://www.favoritepoem.org/files/2022/10/slate_emily-dickinson-1800x624.png"
        }
      />
    </div>
  );
};

export default DickinsonTitles;
