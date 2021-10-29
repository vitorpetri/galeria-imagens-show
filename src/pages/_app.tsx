import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { theme } from '../styles/theme';
import './vanta.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider resetCSS theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Component id="vanta-canvas" {...pageProps} />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r127/three.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.21/vanta.net.min.js" />
        <script src="./vanta.js" />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
