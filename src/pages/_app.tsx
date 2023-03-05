import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Great_Vibes } from "next/font/google";

const GreatVibes = Great_Vibes({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={GreatVibes.className}>
      <Component {...pageProps} />
    </main>
  );
}
