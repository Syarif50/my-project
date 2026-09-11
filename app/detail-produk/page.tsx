import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";

interface DetailProdukProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DetailProduk({
  params,
}: DetailProdukProps) {

  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <div className="detail-page">

      <div className="detail-container">

        <div className="detail-image">

          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />

        </div>

        <div className="detail-info">

          <span className="detail-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <div className="detail-rating">
            {"⭐".repeat(product.rating)}
            <span> ({product.rating}.0)</span>
          </div>

          <h2>
            Rp {product.price.toLocaleString("id-ID")}
          </h2>

          <p className="detail-weight">
            Berat: {product.weight}
          </p>

          <p className="detail-stock">
            Stok tersedia: {product.stock}
          </p>

          <p className="detail-description">
            {product.description}
          </p>

          <div className="quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>

          <div className="detail-buttons">

            <Link
              href="/keranjang"
              className="button"
            >
              🛒 Tambah ke Keranjang
            </Link>

            <Link
              href="/checkout"
              className="button button-secondary"
            >
              Beli Sekarang
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}