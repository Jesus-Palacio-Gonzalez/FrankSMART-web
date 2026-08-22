import { Helmet } from "react-helmet-async";

interface SeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  schema?: Record<string, unknown>;
}

const SITE_NAME = "FrankSMART";
const DEFAULT_TITLE = "FrankSMART | Instalación de Cerraduras Digitales TTLock y Tuya";
const DEFAULT_DESCRIPTION = "Franklin Palacio - Instalación de cerraduras digitales TTLock y Tuya para hogares, oficinas y empresas. Instalo, configuro y dejo todo listo para que controles tus accesos desde el celular.";
const DEFAULT_URL = "https://franksmart.com/";
const DEFAULT_OG_IMAGE = "https://franksmart.com/og-image.jpg";

function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical = DEFAULT_URL,
  ogImage = DEFAULT_OG_IMAGE,
  schema,
}: SeoProps) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="es_CO" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

export default Seo;
