import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../theme";
import "../styles/globals.css";
import "@fontsource/inter/400.css";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <CSSReset />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
