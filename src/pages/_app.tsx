import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux/store'; // Sesuaikan path impor dengan struktur proyek

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;