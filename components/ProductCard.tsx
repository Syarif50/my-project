import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
  weight: string;
  category: string;
}

export default function ProductCard({
  id,
  name,
  image,
  price,
  weight,
  category,
}: ProductCardProps) {
  return (
    <div className="product-card">

      <Link href={`/detail-produk/${id}`}>
        <div className="product-image">

          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
          />

          <span className="product-category">
            {category}
          </span>

        </div>
      </Link>

      <div className="product-info">

        <p className="product-weight">
          {weight}
        </p>

        <h3>{name}</h3>

        <div className="product-rating">
          ⭐⭐⭐⭐⭐
        </div>

        <div className="product-bottom">

          <strong>
            Rp {price.toLocaleString("id-ID")}
          </strong>

          <button className="add-cart">
            🛒
          </button>

        </div>

      </div>

    </div>
  );
}