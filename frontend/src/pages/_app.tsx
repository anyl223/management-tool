import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import "bootstrap/dist/css/bootstrap.min.css";

const theme = createTheme({
  /** Put your mantine theme override here */
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MantineProvider theme={theme}>
        <Component {...pageProps} />;
      </MantineProvider>
    </>
  );
}
