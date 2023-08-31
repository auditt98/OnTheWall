import { Provider } from 'react-redux';
import '../styles/globals.css';

export const metadata = {
  title: 'OnTheWall',
  description: 'Image Library built just for you',
};
import { SessionProvider } from 'next-auth/react';
import { store } from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
