import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitMessage('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setSubmitMessage('An error occurred while sending the message.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            
            <article>
              <h2>Send us a message</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitMessage && (
                  <p className={submitMessage.includes('successfully') ? 'success' : 'error'}>
                    {submitMessage}
                  </p>
                )}
              </form>
            </article>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}