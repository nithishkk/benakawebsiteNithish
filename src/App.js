// import "./App.css";
// import React, { useState } from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import CategoryGrid from "./components/CategoryGrid";
// import Footer from "./components/Footer";
// import ContactPage from "./components/contactPage/contact";
// import AboutPage from "./components/contactPage/AboutUs";
// import BlogPage from "./components/contactPage/Blog";
// import Features from "./components/Features";
// import PrivacyPolicy from "./components/CompanyInfo/PrivacyPolicy";
// import TermsofService from "./components/CompanyInfo/TermsofService";

// function App() {
//   const [activePage, setActivePage] = useState("Home");

//   // 🔑 NEW STATES (CONTROL FLOW)
//   const [activeCollectionId, setActiveCollectionId] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(false);

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGV0YWlscyI6InZlZXJhbm5hLnJhdmkua3VtYXJAYmVuYWthZ3JvdXBzLmNvbSIsInVzZXJJZCI6IjY0ZDljNjJhYjQ1NjcwYzE4NjNlMGVkOCIsImV4cCI6MTc2OTc0OTIxOX0._rZ9Ck6tBTeRRCq6-JNo1osvvOmRTR5c7OHXVfPPfzc";
//   const loadProducts = (collectionId) => {
//     setActiveCollectionId(collectionId);
//     setLoadingProducts(true);

//     fetch("https://aapi.benakajewellers.com/productFilterCollectionId", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${TOKEN}`,
//       },
//       body: JSON.stringify({
//         query: "",
//         collectionId,
//         new_flag: false,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => setProducts(data || data || []))
//       .catch(console.error)
//       .finally(() => setLoadingProducts(false));
//   };

//   const backToCategories = () => {
//     setActiveCollectionId(null);
//     setProducts([]);
//   };
//   const renderCategoryGrid = () => (
//   <CategoryGrid
//     activeCollectionId={activeCollectionId}
//     products={products}
//     loadingProducts={loadingProducts}
//     onCategoryClick={loadProducts}
//     onBack={backToCategories}
//   />
// );

//   const renderPage = () => {
//     switch (activePage) {
//       case "About":
//         return <AboutPage />;
//       case "Blog":
//         return <BlogPage />;
//       case "Contact":
        
//         return <ContactPage />;
//       case "Privacy":

//         return <PrivacyPolicy />;
//       case "Terms":
//         return <TermsofService />;
//         case "Category":
//       // 👉 Navbar Category works
//       return renderCategoryGrid();
//       default:
//         return (
//           <>
//             <Hero />
//             <Features />
//               {/* <CategoryGrid
//               activeCollectionId={activeCollectionId}
//               products={products}
//               loadingProducts={loadingProducts}
//               onCategoryClick={loadProducts}
//               onBack={backToCategories}
//             /> */}
//                       {renderCategoryGrid()}

            
//           </>
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
//       <Header onNavigate={setActivePage} />
//       <main>{renderPage()}</main>
//       <Footer onNavigate={setActivePage} />
//     </div>
//   );
// }

// export default App;




// import "./App.css";
// import React, { useState, useEffect } from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import CategoryGrid from "./components/CategoryGrid";
// import Footer from "./components/Footer";
// import ContactPage from "./components/contactPage/contact";
// import AboutPage from "./components/contactPage/AboutUs";
// import BlogPage from "./components/contactPage/Blog";
// import Features from "./components/Features";
// import PrivacyPolicy from "./components/CompanyInfo/PrivacyPolicy";
// import TermsofService from "./components/CompanyInfo/TermsofService";
// import ReturnPolicy from "./components/CompanyInfo/ReturnPolicy";
// import Shipping from "./components/CompanyInfo/Shipping";

// function App() {
//   // Page navigation
//   const [activePage, setActivePage] = useState("Home");

//   // Category / Product state
//   const [activeCollectionId, setActiveCollectionId] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(false);

//   const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGV0YWlscyI6InZlZXJhbm5hLnJhdmkua3VtYXJAYmVuYWthZ3JvdXBzLmNvbSIsInVzZXJJZCI6IjY0ZDljNjJhYjQ1NjcwYzE4NjNlMGVkOCIsImV4cCI6MTc3NDA5MDQxNn0.KnYMbVEyD_J27W4xNpr2BfrOhWuS9pL_E2X3H9SWKp8";


//   // Fetch products
//   const loadProducts = (collectionId) => {
//     setActiveCollectionId(collectionId);
//     setLoadingProducts(true);

//     fetch("https://aapi.benakajewellers.com/productFilterCollectionId", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${TOKEN}`,
//       },
//       body: JSON.stringify({
//         query: "",
//         collectionId,
//         new_flag: false,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => setProducts(data || []))
//       .catch(console.error)
//       .finally(() => setLoadingProducts(false));
//   };

//   // Back to categories
//   const backToCategories = () => {
//     setActiveCollectionId(null);
//     setProducts([]);
//   };

//   // Smooth scroll when products open
//   useEffect(() => {
//     if (activeCollectionId) {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   }, [activeCollectionId]);

//   // SINGLE reusable Category section
//   const renderCategoryGrid = () => (
//     <CategoryGrid
//       activeCollectionId={activeCollectionId}
//       products={products}
//       loadingProducts={loadingProducts}
//       onCategoryClick={loadProducts}
//       onBack={backToCategories}
//     />
//   );

//   const renderPage = () => {
//     switch (activePage) {
//       case "About":
//         return <AboutPage />;

//       case "Blog":
//         return <BlogPage />;

//       case "Contact":
//         return <ContactPage />;

//       case "Privacy":
//         return <PrivacyPolicy />;

//       case "Terms":
//         return <TermsofService />;

//       case "ReturnPolicy":
//         return <ReturnPolicy/>;

//       case "Shipping":
//         return <Shipping/>;

//       case "Category":
//         return renderCategoryGrid();

//       default:
//         // Home
//         return (
//           <>
//             {/* 🔥 SHOW HERO + FEATURES ONLY WHEN CATEGORY IS NOT OPEN */}
//             {!activeCollectionId && (
//               <>
//                 <Hero />
//                 <Features />
//               </>
//             )}

//             {renderCategoryGrid()}
//           </>
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
//       <Header onNavigate={setActivePage} />
//       <main>{renderPage()}</main>
//       <Footer onNavigate={setActivePage} />
//     </div>
//   );
// }

// export default App;






import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import Footer from "./components/Footer";
import ContactPage from "./components/contactPage/contact";
import AboutPage from "./components/contactPage/AboutUs";
import BlogPage from "./components/contactPage/Blog";
import Features from "./components/Features";
import PrivacyPolicy from "./components/CompanyInfo/PrivacyPolicy";
import TermsofService from "./components/CompanyInfo/TermsofService";
import ReturnPolicy from "./components/CompanyInfo/ReturnPolicy";
import Shipping from "./components/CompanyInfo/Shipping";
import { apiRequest } from "./services/apiClient";

function App() {
  const [activePage, setActivePage] = useState("Home");

  const [activeCollectionId, setActiveCollectionId] = useState(null);
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);

  // ✅ FIXED: Fetch products using apiRequest
  const loadProducts = async (collectionId) => {
    setActiveCollectionId(collectionId);
    setLoadingProducts(true);

    try {
      const data = await apiRequest(
        "https://aapi.benakajewellers.com/productFilterCollectionId",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: "",
            collectionId,
            new_flag: false,
          }),
        }
      );

      console.log("Products API:", data); // 👈 DEBUG

      // ✅ Ensure array
      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error("Product API error:", error);
      setProducts([]);
    } finally {
      setLoadingProducts(false);
    }
  };

  // Back to categories
  const backToCategories = () => {
    setActiveCollectionId(null);
    setProducts([]);
  };

  // Scroll when opening products
  useEffect(() => {
    if (activeCollectionId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeCollectionId]);

  // Category section
  const renderCategoryGrid = () => (
    <CategoryGrid
      activeCollectionId={activeCollectionId}
      products={products}
      loadingProducts={loadingProducts}
      onCategoryClick={loadProducts}
      onBack={backToCategories}
    />
  );

  const renderPage = () => {
    switch (activePage) {
      case "About":
        return <AboutPage />;

      case "Blog":
        return <BlogPage />;

      case "Contact":
        return <ContactPage />;

      case "Privacy":
        return <PrivacyPolicy />;

      case "Terms":
        return <TermsofService />;

      case "ReturnPolicy":
        return <ReturnPolicy />;

      case "Shipping":
        return <Shipping />;

      case "Category":
        return renderCategoryGrid();

      default:
        return (
          <>
            {!activeCollectionId && (
              <>
                <Hero />
                <Features />
              </>
            )}
            {renderCategoryGrid()}
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Header onNavigate={setActivePage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setActivePage} />
    </div>
  );
}

export default App;