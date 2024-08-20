import { Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { DarkModeProvier } from "./context/DarkModeContext";
import { Toaster } from "react-hot-toast";
import CategoriesProvider from "./context/CategoriesContext";
import ProductsProvider from "./context/ProductsContext";

function App() {
  return (
    <DarkModeProvier>
      <ProductsProvider>
        <CategoriesProvider>
          <Toaster />
          <Routes>
            <Route path="/" element={<AppLayout />} />
          </Routes>
        </CategoriesProvider>
      </ProductsProvider>
    </DarkModeProvier>
  );
}

export default App;
