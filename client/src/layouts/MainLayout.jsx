
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="main-content">
        {children}
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
