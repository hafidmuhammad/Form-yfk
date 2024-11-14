import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { FormProvider } from "./components/FormContext";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const savedStep = localStorage.getItem("currentSte");
    if (savedStep) {
      router.push(`/stepper/${savedStep}`);
    } else {
      router.push("/stepper/1");
    }
  }, []);

  return (
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  );
}
