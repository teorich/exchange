import Head from 'next/head';
import { useRouter } from 'next/router';

//top header
import TopHeader from './TopHeader';

//navbar
import Navbar from './Navbar';
import NavbarTwo from './NavbarTwo';

//footer
import Footer from './Footer';

const Layout = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <Head>
        <title>Ferrari Exchange - Send and Receive Money in seconds</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Ferrari Exchange - Send and Receive Money in seconds"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Ferrari Exchange - Send and Receive Money in seconds"
        ></meta>
        <meta
          name="twitter:card"
          content="Ferrari Exchange - Send and Receive Money in seconds"
        ></meta>
        <link rel="canonical" href="https://ferrariexchange.org"></link>
      </Head>

      {pathname === '/' ? <TopHeader /> : ''}
      {pathname === '/index-2' ? <NavbarTwo /> : <Navbar />}

      {children}

      <Footer />
    </>
  );
};

export default Layout;
