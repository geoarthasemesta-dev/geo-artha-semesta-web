import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const bashUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/en", "/id"],
    },
    sitemap: `${bashUrl}/sitemap.xml`,
  };
}
