import React from "react";
import { Old_Standard_TT } from "next/font/google";

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] });

type Props = {};

const Header = (props: Props) => {
  return (
    <header
      className="w-full flex flex-col items-center py-4
      bg-gradient-to-b from-gray-700 to-black text-white border-none"
    >
      <h1 className="text-7xl underline decoration-double decoration-1 decoration-amber-300 underline-offset-8 p-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-yellow-900">
        On Shakespeare
      </h1>
      <h2 className="text-[1.75rem] px-6 pt-4 pb-6 text-center tracking-wide">
        {`"William Shakespeare's genius lies in his ability to capture the
          complexities of human emotions and motivations, and convey them
          through his characters' words and actions. His works demonstrate an
          unparalleled mastery of language and poetic form, showcasing his
          ability to create vivid imagery and use language to delightfully
          express a wide range of ideas and emotions. Shakespeare's works have
          endured for centuries because of their universal themes and enduring
          relevance, which continue to resonate with audiences today. His legacy
          has had a profound impact on the English language and literature, and
          his plays continue to be celebrated as some of the greatest works of
          art in human history."`}
      </h2>
      <div className="w-full flex justify-end pr-40 pb-10">
        <h3 className={`${OldStandardTT.className} text-2xl text-start`}>
          Gee Pee Tee, of House Chat
        </h3>
      </div>
    </header>
  );
};

export default Header;
