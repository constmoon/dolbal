import Head from 'next/head';
import { SITE_SEO } from '../../siteConfig';

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta name="description" content={SITE_SEO.description} />
    <meta property="og:type" content={SITE_SEO.openGraph.type} />
    <meta property="og:title" content={SITE_SEO.openGraph.title} />
    <meta property="og:description" content={SITE_SEO.openGraph.description} />
    <title>{SITE_SEO.title}</title>
  </Head>
);

export default Meta;