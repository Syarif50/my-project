import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";

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
    name: "Kelengkeng Organik",
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
];

export default function Home() {
  return (
    <>
    
      <HeroSection />

      
      <section className="section">

        <SectionTitle
          title="Pilihan Kategori"
          subtitle="Pilih kelengkeng sesuai kebutuhan Anda"
        />

        <div className="category-grid">

          <CategoryCard
            icon="🍃"
            title="Kelengkeng Segar"
            description="Buah segar dengan kualitas terbaik."
          />

          <CategoryCard
            icon="🌱"
            title="Kelengkeng Organik"
            description="Ditanam dengan proses yang lebih alami."
          />

          <CategoryCard
            icon="⭐"
            title="Kelengkeng Premium"
            description="Pilihan terbaik dengan kualitas premium."
          />

          <CategoryCard
            icon="📦"
            title="Paket Hemat"
            description="Lebih banyak dengan harga lebih hemat."
          />

        </div>

      </section>

      {/* PRODUK */}
      <section className="section product-section">

        <SectionTitle
          title="Produk Terlaris"
          subtitle="Kelengkeng pilihan yang paling banyak diminati"
        />

        <div className="product-grid">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}

        </div>

        <div className="center-button">
          <Button
            text="Lihat Semua Produk"
            href="/produk"
          />
        </div>

      </section>

      {/* KEUNGGULAN */}
      <section className="advantages">

        <div className="advantages-container">

          <div>
            <span>🍃</span>
            <h3>Buah Segar</h3>
            <p>Dipilih dengan kualitas terbaik.</p>
          </div>

          <div>
            <span>🚚</span>
            <h3>Pengiriman Aman</h3>
            <p>Dikemas dengan aman sampai tujuan.</p>
          </div>

          <div>
            <span>🛡️</span>
            <h3>Harga Terjangkau</h3>
            <p>Harga sesuai dengan kualitas.</p>
          </div>

          <div>
            <span>⭐</span>
            <h3>Kualitas Terjamin</h3>
            <p>Produk berkualitas untuk keluarga.</p>
          </div>

        </div>

      </section>
    </>
  );
}