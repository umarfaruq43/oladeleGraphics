import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../theme";
import "../styles/globals.css";
import "@fontsource/inter/400.css";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
