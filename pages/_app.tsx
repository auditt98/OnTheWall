import '../styles/globals.css';

export const metadata = {
  title: "OnTheWall",
  description: "Image Library built just for you",
};
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
