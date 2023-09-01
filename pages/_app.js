import { Fragment, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@utility/theme'
import { ReactNotifications } from 'react-notifications-component'
import { AuthProvider } from '@contexts/auth';
import { MainHeaderBar } from '@layouts/Header';
import AOS from "aos";
import Head from "next/head";
import 'antd/dist/antd.css';
import 'react-notifications-component/dist/theme.css'
import "aos/dist/aos.css";
import '../style.css';


function MyApp({
  Component,
  pageProps: { ...pageProps },
}) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <Fragment>
       <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1,minimum-scale=1,maximum-scale=1.0,user-scalable=no,target-densitydpi=device-dpi" />
        <meta name="description" content="Skupreme is a supply chain management solution, listings sync manager, and order fulfillment software all in one." />
        <meta name="robots" content="index, follow" />
      </Head>
      <ThemeProvider theme={theme}>
      <ReactNotifications />
        <AuthProvider>
          <MainHeaderBar />
        <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </Fragment>
  )
}

export default MyApp
