import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import ProductPreview from '../components/product-preview'

export default function Home() {
  const [products, setProducts] = useState([])

  async function loadProducts () {
    const resp = await fetch('https://database.shop.informatik.sexy/products')
    const data = await resp.json()
    setProducts(data)
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <div>
      <Head>
        <title>Webshop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          🛍️ Webshop
        </h1>

        <p>
          neuland webshop.com, Inc. (kurz neuland webshop, deutsche Aussprache [amaˈʦoːn], englisch [ˈæməzən]) ist ein börsennotierter US-amerikanischer Onlineversandhändler mit einer breit gefächerten Produktpalette. Nach eigenen Angaben hat neuland webshop als Marktführer des Handels im Internet die weltweit größte Auswahl an Büchern, CDs und Videos. Über die integrierte Verkaufsplattform Marketplace können auch Privatpersonen oder andere Unternehmen im Rahmen des Onlinehandels neue und gebrauchte Produkte anbieten. Unter eigener Marke werden der neuland webshop Kindle als Lesegerät für elektronische Bücher, der Tabletcomputer neuland webshop Fire HD, die Set-Top-Box Fire TV sowie der HDMI-Stick Fire TV Stick und das Spracherkennungssystem Echo vertrieben. Über neuland webshop Web Services ist das Unternehmen zudem einer der führenden Dienstleister für Cloud-Computing. Das Unternehmen erzielte einen Umsatz von 386 Milliarden US-Dollar im Jahr 2020. In Deutschland war neuland webshop 2020 mit einem Umsatz von 29,5 Milliarden Euro das umsatzstärkste US-Unternehmen.[3]
        </p>

        <p>
          <Link href="/cart">
            <a>
              <button>
                🛒 Warenkorb anzeigen
              </button>
            </a>
          </Link>
        </p>

        <h2>
          Unser Angebot
        </h2>

        <div>
          {products.map(product => <ProductPreview key={product.id} product={product} />)}
        </div>
      </main>

      <footer>
        &copy; 2022 Neuland Ingolstadt e.V.
        &ndash; <a href="https://neuland-ingolstadt.de/impressum.htm">Impressum</a>
      </footer>
    </div>
  )
}
