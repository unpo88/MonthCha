import React from "react";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";

import styletron from "../styletron";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
