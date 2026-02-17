import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterSidebar from "../components/FilterSidebar";
import ProductCard, { Product } from "../components/ProductCard";

async function getProducts(): Promise<Product[]> {
  const response = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="page">
      <Navbar />
      <main className="page__main">
        <section className="page__hero">
          <div className="page__hero-inner">
            <h1 className="page__hero-title">DISCOVER OUR PRODUCTS</h1>
            <p className="page__hero-description">
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
              dolor.
            </p>
          </div>
        </section>
        <section className="page__content">
          <div className="page__controls">
            <div className="page__controls-left">
              <span className="page__product-count">{products.length} ITEMS</span>
              <button className="page__filter-toggle">{"<"} HIDE FILTER</button>
            </div>
            <div className="page__controls-right">
              <div className="page__sort">
                <span>RECOMMENDED</span>
                <span className="page__sort-icon">▼</span>
              </div>
            </div>
          </div>
          <div className="page__grid-container">
            <FilterSidebar />
            <div className="product-grid">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
