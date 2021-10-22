import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { Auth0Provider } from '@auth0/auth0-react'
import { useAuth0 } from '@auth0/auth0-react'
import { Grid } from '@mui/material'

import { NavBar } from '../src/components/navigation'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Auth0Provider
            domain={process.env.NEXT_PUBLIC_AUTH_DOMAIN}
            clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
            redirectUri={"http://localhost:3000/onboarding/first-step"}
          >
            <Grid container component="main">
              <Grid item xs={12}>
                <NavBar />
              </Grid>
              <Grid item xs={12}>
                <Component {...pageProps} />
              </Grid>
            </Grid>
          </Auth0Provider>
        </ThemeProvider>
    </CacheProvider>
  );
}