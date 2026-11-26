import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products } from "./data/products";
import { filterProducts } from "./utils/product";
import "./App.css";

function App() {
  const cheapProducts = filterProducts(products, { maxPrice: 300000, sort: "asc" });
  const electronics = filterProducts(products, { category: "Điện tử" });
  const lowStockProducts = products.filter((product) => product.stock >= 1 && product.stock <= 5);

  return (
    <>
      <Header />
      <main>
        <ProductList title="Sản phẩm nổi bật" items={products} />
        <ProductList title="Giá dưới 300.000 đ" items={cheapProducts} />
        <ProductList title="Đồ điện tử" items={electronics} />
        <ProductList title="Sản phẩm sắp hết hàng" items={lowStockProducts} />
      </main>
      <Footer />
    </>
  );
}

export default App;
