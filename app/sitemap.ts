export default async function sitemap() {
  const bashUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return [
    {
      url: `${bashUrl}/home`,
      lastModified: new Date(),
    },
  ];
}
