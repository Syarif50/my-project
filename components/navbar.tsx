"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link href="/" className="logo">
          <span className="logo-icon">🍈</span>
          <span>
            <strong>Kelengkeng</strong>
            <small>FRESH</small>
          </span>
        </Link>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Beranda
          </Link>

          <Link href="/produk" onClick={() => setMenuOpen(false)}>
            Produk
          </Link>

          <Link href="/tentang-kami" onClick={() => setMenuOpen(false)}>
            Tentang Kami
          </Link>

          <Link href="/kontak" onClick={() => setMenuOpen(false)}>
            Kontak
          </Link>

          <Link href="/login" className="nav-login">
            Login
          </Link>

          <Link href="/keranjang" className="cart-button">
            🛒 Keranjang
          </Link>
        </nav>

      </div>
    </header>
  );
}