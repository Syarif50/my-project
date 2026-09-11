import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>🍈 Kelengkeng Fresh</h2>

          <p>
            Menyediakan buah kelengkeng segar dan berkualitas
            untuk kebutuhan keluarga Anda.
          </p>
        </div>

        <div className="footer-links">
          <h3>Menu</h3>

          <Link href="/">Beranda</Link>
          <Link href="/produk">Produk</Link>
          <Link href="/tentang-kami">Tentang Kami</Link>
          <Link href="/kontak">Kontak</Link>
        </div>

        <div className="footer-contact">
          <h3>Kontak</h3>

          <p>📍 Lampung, Indonesia</p>
          <p>📞 08xxxxxxxxxx</p>
          <p>✉️ info@kelengkengfresh.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Kelengkeng Fresh. Semua Hak Dilindungi.
        </p>
      </div>

    </footer>
  );
}