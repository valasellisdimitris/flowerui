import Head from "next/head";
import { useRouter } from "next/router";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  canonical?: string;
}

export default function SEO({
  title = "FlowerUI - Beautiful React Components for Modern Applications",
  description = "FlowerUI provides artisan-quality React TSX components built with Tailwind CSS and Framer Motion. Copy, paste, and customize over 90+ production-ready components to build stunning applications faster.",
  image = "/logo-flower.png",
  type = "website",
  keywords = "react components, tsx components, tailwind css, framer motion, ui library, component library, react ui, nextjs components, free components, open source ui",
  author = "Dimitris Valasellis",
  publishedTime,
  modifiedTime,
  noindex = false,
  canonical,
}: SEOProps) {
  const router = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://flowerui.vercel.app";
  const fullUrl = `${siteUrl}${router.asPath}`;
  const canonicalUrl = canonical || fullUrl;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  // Structured Data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FlowerUI",
    url: siteUrl,
    logo: `${siteUrl}/logo-flower.png`,
    description: "Beautiful React components for modern applications",
    founder: {
      "@type": "Person",
      name: "Dimitris Valasellis",
    },
    sameAs: ["https://github.com/valasellisdimitris/flowerui"],
  };

  // Structured Data for SoftwareApplication
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FlowerUI",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Open-source React component library with 90+ production-ready components",
    url: siteUrl,
    screenshot: imageUrl,
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots Meta */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="FlowerUI" />
      <meta property="og:locale" content="en_US" />

      {/* Article specific tags */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content="@flowerui" />

      {/* Additional SEO tags */}
      <meta name="theme-color" content="#101010" />
      <meta name="color-scheme" content="dark light" />
      
      {/* Verification tags (add your own verification codes) */}
      {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> */}
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
    </Head>
  );
}
