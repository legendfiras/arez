import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import HeroSearch from '../src/components/HeroSearch';
import StatsStrip from '../src/components/StatsStrip';
import PropertyGrid from '../src/components/PropertyGrid';
import Footer from '../src/components/Footer';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>AREZ REAL ESTATE | Find your next home</title>
        <meta
          name="description"
          content="AREZ REAL ESTATE – browse properties, explore neighborhoods, and find your next home."
        />
      </Head>

      <div className="page-root">
        <Navbar />
        <main>
          <HeroSearch />
          <StatsStrip />
          <PropertyGrid />

          <section className="info-section">
            <div className="info-card">
              <h2>Buy with confidence</h2>
              <p>
                Get accurate pricing insights, neighborhood data, and dedicated
                support so you can buy with clarity.
              </p>
            </div>
            <div className="info-card">
              <h2>List your property</h2>
              <p>
                Work with our agents to list, market, and close on your
                property quickly and efficiently.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}