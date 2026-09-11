import Button from "./Button";

export default function HeroSection() {
  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-label">
            🍃 BUAH SEGAR BERKUALITAS
          </span>

          <h1>
            Nikmati Manisnya
            <br />
            <span>Kelengkeng Fresh</span>
          </h1>

          <p>
            Kelengkeng segar pilihan dengan kualitas terbaik,
            langsung untuk keluarga Anda.
          </p>

          <div className="hero-buttons">
            <Button
              text="Belanja Sekarang"
              href="/produk"
            />

            <Button
              text="Lihat Produk"
              href="/produk"
              variant="secondary"
            />
          </div>

        </div>

        <div className="hero-image">
          <div className="fruit-circle">
            🍈
          </div>
        </div>

      </div>

    </section>
  );
}