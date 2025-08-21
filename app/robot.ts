import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const bashUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/home"],
    },
    sitemap: `${bashUrl}/sitemap.xml`,
  };
}
