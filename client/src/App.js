import "./App.css";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/home/HomePage";
import { AuthProvider } from "./context/providers/AuthContext";
import { ProductProvider } from "./context/providers/ProductsContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import ProductForm from "./pages/products/ProductForm";
import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";

function App() {
  return (
    <Router>
      <AuthProvider>
        <ProductProvider>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/new" element={<ProductForm />} />
              <Route path="/auth/signin" element={<Signin />} />
              <Route path="/auth/signup" element={<Signup />} />
            </Routes>
          </div>
        </ProductProvider>
        <Toaster/>
      </AuthProvider>
    </Router>
  );
}

export default App;
