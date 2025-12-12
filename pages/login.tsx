import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import { loginAdmin } from '../src/lib/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAdmin(email, password)) {
      router.push('/admin');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <>
      <Head>
        <title>Login | AREZ REAL ESTATE</title>
      </Head>
      <div className="page-root">
        <Navbar />
        <main>
          <div className="login-container">
            <h1>Admin Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
              {error && <div className="error-message">{error}</div>}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Log in</button>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}