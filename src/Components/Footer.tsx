import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer
      className="w-full flex flex-col items-center py-6
      bg-gradient-to-l from-pink-900 to-black text-white border-none"
    >
      <div className="pt-4 text-2xl text-yellow-100">
        {"Here lies Gulielmus Shakspere's DramatiC footer"} 👣
      </div>
      <Image
        width={500}
        height={500}
        className="pt-8 pb-4 rounded-md"
        src="https://www.azquotes.com/picture-quotes/quote-keep-thy-foot-out-of-brothels-thy-hand-out-of-plackets-thy-pen-from-lender-s-books-and-william-shakespeare-86-20-49.jpg"
        alt=""
      />
    </footer>
  );
};

export default Footer;
