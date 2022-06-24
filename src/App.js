import './App.css';
import Header from './common/Header'
import Footer from './common/Footer'
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import { NotFound } from './pages/NotFoundPage';

const StyledWrapper = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  @media screen and (max-width: 768px) {
      padding-top: 51px;
  }
`;

function App() {
  return (
    <Router>
      <Header />
      <StyledWrapper>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/productsPage' exact element={<ProductsPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </StyledWrapper>
      <Footer />
    </Router>
  );
}

export default App;
