import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'Property-plus Docs',
  description: 'Property-plus is a powerful API for building real estate applications.',
};

const navbar = (
  <Navbar
    logo={<b>Property-Plus 🏗 🏘</b>}
  />
)
const footer = <Footer>{new Date().getFullYear()} © Propety +.</Footer>

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          feedback={{
            content: null
          }}
          editLink={null}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}