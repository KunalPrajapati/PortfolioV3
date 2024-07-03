import { Html, Head, Main, NextScript } from 'next/document';


export default function Document() {
  return (
    <Html lang="en">
     <Head>
        <link rel="icon" href='/public/assets/fav.png'/> 
        <title>Kunal.Dev</title>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
