import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | AREZ REAL ESTATE</title>
      </Head>
      <div className="page-root">
        <Navbar />
        <main className="content-page">
          <section className="content-hero">
            <h1>About AREZ REAL ESTATE</h1>
            <p>
              AREZ REAL ESTATE connects buyers, sellers, and renters with
              trusted opportunities across various locations.
            </p>
          </section>

          <section className="content-grid">
            <article>
              <h2>Our mission</h2>
              <p>
                To make real estate decisions simple, transparent, and data
                driven for every client we serve.
              </p>
            </article>
            <article>
              <h2>Our values</h2>
              <ul>
                <li>Integrity in every interaction</li>
                <li>Client-first mindset</li>
                <li>Data-backed recommendations</li>
              </ul>
            </article>
            <article>
              <h2>Where we operate</h2>
              <p>
                We cover Beirut, Tripoli, Mount Lebanon, Sidon, and Tyre with
                dedicated teams and local expertise.
              </p>
            </article>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}