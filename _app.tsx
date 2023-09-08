import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { FarmContextProvider } from "@/context/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FarmContextProvider>
      <Component {...pageProps} />
    </FarmContextProvider>
  );
}
