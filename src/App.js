import './App.css';
import Header from './common/header'
import Footer from './common/footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path='/' exact element={
            <HomePage />
          }/>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
