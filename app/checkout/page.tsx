"use client";

import Link from "next/link";

export default function CheckoutPage() {

  return (
    <div className="checkout-page">

      <section className="page-header">
        <div className="page-header-container">

          <p>Beranda / Checkout</p>

          <h1>Checkout</h1>

          <span>
            Lengkapi data pengiriman Anda
          </span>

        </div>
      </section>

      <section className="section">

        <div className="checkout-layout">

          <div className="checkout-form">

            <h2>Informasi Pengiriman</h2>

            <label>
              Nama Lengkap
            </label>

            <input
              type="text"
              placeholder="Masukkan nama lengkap"
            />

            <label>
              Nomor WhatsApp
            </label>

            <input
              type="text"
              placeholder="08xxxxxxxxxx"
            />

            <label>
              Alamat Lengkap
            </label>

            <textarea
              rows={4}
              placeholder="Masukkan alamat lengkap"
            />

            <label>
              Kecamatan
            </label>

            <input
              type="text"
              placeholder="Masukkan kecamatan"
            />

            <label>
              Kota / Kabupaten
            </label>

            <input
              type="text"
              placeholder="Masukkan kota atau kabupaten"
            />

            <label>
              Catatan Pesanan
            </label>

            <textarea
              rows={3}
              placeholder="Contoh: Tolong kirim sore hari"
            />

          </div>

          <div className="checkout-summary">

            <h2>Ringkasan Pesanan</h2>

            <div className="checkout-product">

              <div>
                <strong>
                  Kelengkeng Super
                </strong>

                <p>
                  500 gram × 1
                </p>
              </div>

              <strong>
                Rp 35.000
              </strong>

            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <strong>Rp 35.000</strong>
            </div>

            <div className="summary-row">
              <span>Pengiriman</span>
              <strong>Rp 10.000</strong>
            </div>

            <hr />

            <div className="summary-total">
              <span>Total</span>
              <strong>Rp 45.000</strong>
            </div>

            <Link
              href="/pembayaran"
              className="button checkout-button"
            >
              Lanjut Pembayaran
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}