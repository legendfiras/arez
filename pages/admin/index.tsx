import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import { isAdminLoggedIn, logoutAdmin } from '../../src/lib/auth';

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isAdminLoggedIn()) {
      router.push('/login');
    } else {
      setIsLoggedIn(true);
    }
  }, [router]);

  const handleLogout = () => {
    logoutAdmin();
    router.push('/');
  };

  if (!isLoggedIn) {
    return null; // Or a loading spinner
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard | AREZ REAL ESTATE</title>
      </Head>
      <div className="page-root">
        <Navbar />
        <main className="admin-dashboard">
          <div className="admin-header">
            <h1>Admin Dashboard</h1>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>

          <section className="content-grid">
            <article>
              <h2>Manage Properties</h2>
              <p>Add, edit, or remove property listings.</p>
              <button>Add New Property</button>
            </article>
            <article>
              <h2>User Inquiries</h2>
              <p>View and respond to customer messages.</p>
              <button>View Messages</button>
            </article>
            <article>
              <h2>Analytics</h2>
              <p>View site traffic and property interest metrics.</p>
              <button>View Reports</button>
            </article>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}