export const seoConfig = {
  meta: [
    {
      charSet: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      title: "MerchWay",
    },
    {
      name: "color-scheme",
      content: "light dark",
    },
    {
      name: "description",
      content:
        "MerchWay - The premier destination for exclusive merchandise and collectibles.",
    },
    {
      name: "keywords",
      content:
        "merchandise, collectibles, exclusive merch, limited edition, MerchWay",
    },
    {
      property: "og:title",
      content: "MerchWay",
    },
    {
      property: "og:description",
      content: "Discover exclusive merchandise and collectibles at MerchWay",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
  ],

  faviconLinks: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon-96x96.png",
      sizes: "96x96",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg",
    },
    {
      rel: "shortcut icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
};

// Type for page metadata options
export interface PageMetaOptions {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  keywords?: string;
  canonical?: string;
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  twitterSite?: string;
  twitterCreator?: string;
  robots?: string;
}

// Utility function to create head metadata for individual pages
export function createPageMeta(options: PageMetaOptions = {}) {
  const {
    title = "MerchWay",
    description = "MerchWay - The premier destination for exclusive merchandise and collectibles.",
    ogTitle = title,
    ogDescription = description,
    ogImage,
    ogUrl,
    keywords,
    canonical,
    twitterCard = "summary_large_image",
    twitterSite,
    twitterCreator,
    robots,
  } = options;

  return {
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title,
      },
      {
        name: "color-scheme",
        content: "light dark",
      },
      {
        name: "description",
        content: description,
      },
      ...(keywords
        ? [
            {
              name: "keywords",
              content: keywords,
            },
          ]
        : []),
      ...(robots
        ? [
            {
              name: "robots",
              content: robots,
            },
          ]
        : []),
      {
        property: "og:title",
        content: ogTitle,
      },
      {
        property: "og:description",
        content: ogDescription,
      },
      {
        property: "og:type",
        content: "website",
      },
      ...(ogImage
        ? [
            {
              property: "og:image",
              content: ogImage,
            },
          ]
        : []),
      ...(ogUrl
        ? [
            {
              property: "og:url",
              content: ogUrl,
            },
          ]
        : []),
      {
        name: "twitter:card",
        content: twitterCard,
      },
      ...(twitterSite
        ? [
            {
              name: "twitter:site",
              content: twitterSite,
            },
          ]
        : []),
      ...(twitterCreator
        ? [
            {
              name: "twitter:creator",
              content: twitterCreator,
            },
          ]
        : []),
    ],
    links: [
      ...seoConfig.faviconLinks,
      ...(canonical
        ? [
            {
              rel: "canonical",
              href: canonical,
            },
          ]
        : []),
    ],
  };
}
