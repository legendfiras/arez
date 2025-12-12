import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | AREZ REAL ESTATE</title>
      </Head>
      <div className="page-root">
        <Navbar />
        <main className="content-page">
          <section className="content-hero">
            <h1>Contact us</h1>
            <p>
              Have questions? Get in touch with our team and we'll help you find
              your next home.
            </p>
          </section>

          <section className="content-grid">
            <article>
              <h2>Contact methods</h2>
              <p>
                <strong>Phone:</strong> +961 70 769918
                <br />
                <strong>Email:</strong> arezrealestate@gmail.com
              </p>
              <p>
                <strong>Social Media:</strong>
                <br />
                Instagram: <a href="https://www.instagram.com/arez_realestate" target="_blank" rel="noopener noreferrer">@arez_realestate</a>
                <br />
                TikTok: <a href="https://www.tiktok.com/@arez.realestate" target="_blank" rel="noopener noreferrer">@arez.realestate</a>
              </p>
              <p>
                For property inquiries:
                <br />
                arezrealestate@gmail.com
              </p>
            </article>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
