"use client";

import Script from 'next/script';
import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import { createTheme, MantineProvider } from '@mantine/core';
import { useReportWebVitals } from 'next/web-vitals';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function Client({ nonce }: { nonce: string | undefined }, {Component, pageProps}: AppProps) {
  useReportWebVitals((metric) => {
    console.log(metric);
  });

  return (
    <MantineProvider theme={theme}>
    <Component {...pageProps} />
    <Script
        src="https://www.googletagmanager.com/gtag/js"
        strategy="afterInteractive"
        nonce={nonce}
      />
      <div>
        <h1>The value of customKey is: {process.env.name}</h1>
      </div>
  </MantineProvider>
  );
}
