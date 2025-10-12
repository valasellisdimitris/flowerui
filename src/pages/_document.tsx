import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and Apple Touch Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo-flower.png" />
        
        {/* Manifest for PWA support */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="https://github.com" />
        
        {/* Essential Meta Tags */}
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="origin-when-cross-origin" />
        
        {/* Format Detection */}
        <meta name="format-detection" content="telephone=no" />
        
        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#101010" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#101010" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </Head>
      <body className="antialiased font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
