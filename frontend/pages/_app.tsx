import { AppProps } from "next/app";
import React, { useState, useEffect } from "react";
import { Provider } from "starknet";
import {
  getInstalledInjectedConnectors,
  useStarknet,
  StarknetProvider,
} from "@starknet-react/core";
import Layout from "~/components/Layout";
function MyApp({ Component, pageProps }: AppProps) {
  const connectors = getInstalledInjectedConnectors();
  const [showChild, setShowChild] = useState(false);
  const { account } = useStarknet();

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <StarknetProvider
        connectors={connectors}
        defaultProvider={new Provider({ baseUrl: "http://localhost:5050" })}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StarknetProvider>
    );
  }
}

export default MyApp;
