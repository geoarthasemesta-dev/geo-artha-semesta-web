export default async function sitemap() {
  const bashUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return [
    {
      url: `${bashUrl}/id`,
      lastModified: new Date(),
    },
    {
      url: `${bashUrl}/en`,
      lastModified: new Date(),
    },
  ];
}
