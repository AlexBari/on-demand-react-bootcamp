import './App.css';
import React, { useMemo, useReducer } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import Header from './common/header/header';
import Footer from './common/footer/footer';
import HomePage from './pages/home';
import ProductsPage from './pages/products';
import NotFound from './pages/notFound';
import ProductDetailPage from './pages/productDetail';
import SearchPage from './pages/search';
import CartPage from './pages/cart';
import { cartReducer, cartInitState } from './reducers/cartReducer';
import CheckoutPage from './pages/checkout';
import ErrorBoundary from './common/error/errorBoundary';
import { StyledWrapper } from './styled';
import AppContext from './utils/appContext';

function App() {
    const [state, dispatch] = useReducer(cartReducer, cartInitState);
    const contextValue = useMemo(
        () => ({ state, dispatch }),
        [state, dispatch]
    );
    return (
        <Router>
            <AppContext.Provider value={contextValue}>
                <Header />
                <StyledWrapper>
                    <ErrorBoundary>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route
                                path="/home"
                                element={<Navigate to="/" replace />}
                            />
                            <Route path="/product" element={<ProductsPage />} />
                            <Route
                                path="/product/:productId"
                                element={<ProductDetailPage />}
                            />
                            <Route path="/search" element={<SearchPage />} />
                            <Route path="/cart" element={<CartPage />} />
                            <Route
                                path="/checkout"
                                element={
                                    state.totalOfItems === 0 ? (
                                        <Navigate to="/product" />
                                    ) : (
                                        <CheckoutPage />
                                    )
                                }
                            />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </ErrorBoundary>
                </StyledWrapper>
            </AppContext.Provider>
            <Footer />
        </Router>
    );
}

export default App;
