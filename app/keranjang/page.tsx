"use client";

import Link from "next/link";
import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  weight: string;
  quantity: number;
}

const initialCart: CartItem[] = [
  {
    id: 1,
    name: "Kelengkeng Super",
    price: 35000,
    weight: "500 gram",
    quantity: 1,
  },
];

export default function KeranjangPage() {

  const [cart, setCart] = useState(initialCart);

  const increase = (id: number) => {
    setCart((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decrease = (id: number) => {
    setCart((items) =>
      items
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <section className="page-header">
        <div className="page-header-container">

          <p>Beranda / Keranjang</p>

          <h1>Keranjang Belanja</h1>

          <span>
            Periksa kembali produk sebelum checkout
          </span>

        </div>
      </section>

      <section className="section">

        {cart.length === 0 ? (

          <div className="empty-cart">

            <div>🛒</div>

            <h2>Keranjang masih kosong</h2>

            <p>
              Yuk pilih kelengkeng favoritmu!
            </p>

            <Link
              href="/produk"
              className="button"
            >
              Belanja Sekarang
            </Link>

          </div>

        ) : (

          <div className="cart-layout">

            <div className="cart-items">

              {cart.map((item) => (

                <div
                  className="cart-item"
                  key={item.id}
                >

                  <div className="cart-item-image">
                    🍈
                  </div>

                  <div className="cart-item-info">

                    <h3>{item.name}</h3>

                    <p>{item.weight}</p>

                    <strong>
                      Rp {item.price.toLocaleString("id-ID")}
                    </strong>

                  </div>

                  <div className="quantity">

                    <button
                      onClick={() =>
                        decrease(item.id)
                      }
                    >
                      -
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increase(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                </div>

              ))}

            </div>

            <div className="cart-summary">

              <h2>Ringkasan Pesanan</h2>

              <div className="summary-row">
                <span>Subtotal</span>

                <strong>
                  Rp {total.toLocaleString("id-ID")}
                </strong>
              </div>

              <div className="summary-row">
                <span>Pengiriman</span>

                <strong>
                  Rp 10.000
                </strong>
              </div>

              <hr />

              <div className="summary-total">
                <span>Total</span>

                <strong>
                  Rp {(total + 10000).toLocaleString("id-ID")}
                </strong>
              </div>

              <Link
                href="/checkout"
                className="button checkout-button"
              >
                Lanjut Checkout
              </Link>

            </div>

          </div>

        )}

      </section>

    </div>
  );
}