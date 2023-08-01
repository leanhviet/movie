import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';

import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  SwiperCore.use([Autoplay])
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
