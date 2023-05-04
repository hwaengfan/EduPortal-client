import '@/styles/global.scss';
import type { AppProps } from 'next/app';
import { SSRProvider } from 'react-bootstrap';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
};

export default App;
