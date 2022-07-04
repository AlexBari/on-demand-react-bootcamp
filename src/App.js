import './App.css';
import Header from './common/header.js';
import Footer from './common/footer.js';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/home.js';
import ProductsPage from './pages/products.js';
import { NotFound } from './pages/notFound.js';
import ProductDetailPage from './pages/productDetailPage';
import SearchPage from './pages/search';

const StyledWrapper = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  @media screen and (max-width: 980px) {
      padding-top: 51px;
  }
`;

function App() {
  return (
    <Router>
      <Header />
      <StyledWrapper>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<Navigate to="/" replace />} />
          <Route path='/product' element={<ProductsPage />} />
          <Route path='/product/:productId' element={<ProductDetailPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </StyledWrapper>
      <Footer />
    </Router>
  );
}

export default App;
