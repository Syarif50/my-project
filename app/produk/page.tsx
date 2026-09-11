import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";

const products = [
  {
    id: 1,
    name: "Kelengkeng Super",
    image: "/images/kelengkeng-super.jpg",
    price: 35000,
    weight: "500 gram",
    category: "Best Seller",
  },
  {
    id: 2,
    name: "Kelengkeng Raja",
    image: "/images/kelengkeng-organik.jpg",
    price: 45000,
    weight: "500 gram",
    category: "Organik",
  },
  {
    id: 3,
    name: "Kelengkeng Premium",
    image: "/images/kelengkeng-premium.jpg",
    price: 55000,
    weight: "500 gram",
    category: "Premium",
  },
  {
    id: 4,
    name: "Kelengkeng Jumbo",
    image: "/images/kelengkeng-jumbo.jpg",
    price: 60000,
    weight: "1 Kg",
    category: "Premium",
  },
  {
    id: 5,
    name: "Kelengkeng Lokal",
    image: "/images/kelengkeng-lokal.jpg",
    price: 30000,
    weight: "500 gram",
    category: "Segar",
  },
  {
    id: 6,
    name: "Paket Keluarga",
    image: "/images/kelengkeng-paket.jpg",
    price: 100000,
    weight: "2 Kg",
    category: "Paket Hemat",
  },
];

export default function ProdukPage() {
  return (
    <div className="produk-page">

      <section className="page-header">

        <div className="page-header-container">

          <p>Beranda / Produk</p>

          <h1>
            Produk Kelengkeng
          </h1>

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

        {/* FILTER */}
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

        {/* PRODUCT */}
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