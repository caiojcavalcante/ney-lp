import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

//GTM-5WV3J2JM

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GTM-5WV3J2JM"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', 'GTM-5WV3J2JM', {
              page_path: window.location.pathname,
            });`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins:ital,wght@0,300;0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5WV3J2JM"
            height="0"
            width="0"
            // style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
