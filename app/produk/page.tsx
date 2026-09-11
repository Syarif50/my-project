import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { products } from "@/lib/data";

export default function ProdukPage() {
  return (
    <div className="produk-page">

      <section className="page-header">
        <div className="page-header-container">

          <p>Beranda / Produk</p>

          <h1>Produk Kelengkeng</h1>

          <span>
            Pilih kelengkeng favorit Anda
          </span>

        </div>
      </section>

      <section className="section">

        <SectionTitle
          title="Semua Produk"
          subtitle="Temukan berbagai pilihan kelengkeng berkualitas"
        />

        <div className="product-filter">

          <button className="filter-active">
            Semua
          </button>

          <button>
            Segar
          </button>

          <button>
            Organik
          </button>

          <button>
            Premium
          </button>

          <button>
            Paket Hemat
          </button>

        </div>

        <div className="product-grid">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}

        </div>

      </section>

    </div>
  );
}