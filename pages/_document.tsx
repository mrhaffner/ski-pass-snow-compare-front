import Document, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../styles/muiTheme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body
          style={{
            background:
              'linear-gradient(180deg, rgba(45,132,255,1) 60%, rgba(107,157,255,1) 88%) fixed',
            minHeight: '100vh',
            position: 'relative',
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
