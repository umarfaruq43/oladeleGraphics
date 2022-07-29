import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../theme";
import "../styles/globals.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
  
        <ChakraProvider theme={theme}>
          <CSSReset />

          <NextNProgress
            color="#29D"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />
          <Component {...pageProps} />
        </ChakraProvider>
    </>
  );
}

export default MyApp;
