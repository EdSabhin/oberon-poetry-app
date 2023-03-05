import Image from "next/image";
import React from "react";
import { Old_Standard_TT } from "next/font/google";

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] });

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer
      className="w-full flex flex-col items-center py-6
      bg-gradient-to-t from-gray-700 to-black text-white border-none tracking-wider"
    >
      <div className="pt-4 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-400">
        {"Here lies Gulielmus Shakspere's Dramatic Footer"} 👣
      </div>
      <Image
        width={500}
        height={500}
        className="pt-8 pb-4 rounded-md"
        src="https://www.azquotes.com/picture-quotes/quote-keep-thy-foot-out-of-brothels-thy-hand-out-of-plackets-thy-pen-from-lender-s-books-and-william-shakespeare-86-20-49.jpg"
        alt=""
      />
      <a
        href="https://www.flaticon.com/free-icons/feather"
        title="feather icons"
        className={`${OldStandardTT.className} border-none p-2 px-6 mt-4 font-bold text-indigo-400 hover:text-amber-400 rounded italic transition ease-in-out text-lg `}
        target="__blank"
      >
        Feather icons created by Freepik - Flaticon
      </a>
    </footer>
  );
};

export default Footer;
