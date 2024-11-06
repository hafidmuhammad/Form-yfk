import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { FormProvider } from "./Components/FormContext";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  );
}
