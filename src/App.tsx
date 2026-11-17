import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { PageLoader } from './components/common/PageLoader';

// Code Splitting with React.lazy for optimal performance and chunk minimization
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const ProductsPage = lazy(() => import('./pages/ProductsPage').then(m => ({ default: m.ProductsPage })));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage').then(m => ({ default: m.ProductDetailPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const BookCallPage = lazy(() => import('./pages/BookCallPage').then(m => ({ default: m.BookCallPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<PageLoader />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<PageLoader />}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="services"
            element={
              <Suspense fallback={<PageLoader />}>
                <ServicesPage />
              </Suspense>
            }
          />
          <Route
            path="services/:slug"
            element={
              <Suspense fallback={<PageLoader />}>
                <ServiceDetailPage />
              </Suspense>
            }
          />
          <Route
            path="products"
            element={
              <Suspense fallback={<PageLoader />}>
                <ProductsPage />
              </Suspense>
            }
          />
          <Route
            path="products/:slug"
            element={
              <Suspense fallback={<PageLoader />}>
                <ProductDetailPage />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<PageLoader />}>
                <ContactPage />
              </Suspense>
            }
          />
          <Route
            path="book-a-call"
            element={
              <Suspense fallback={<PageLoader />}>
                <BookCallPage />
              </Suspense>
            }
          />
          <Route
            path="privacy-policy"
            element={
              <Suspense fallback={<PageLoader />}>
                <PrivacyPolicyPage />
              </Suspense>
            }
          />
          <Route
            path="terms-and-conditions"
            element={
              <Suspense fallback={<PageLoader />}>
                <TermsPage />
              </Suspense>
            }
          />
          <Route path="terms-of-service" element={<Navigate to="/terms-and-conditions" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
