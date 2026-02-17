export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.title}
          className="product-card__image"
          loading="lazy"
        />
        <button className="product-card__wishlist" aria-label="Add to wishlist">
          <span className="product-card__wishlist-icon">♡</span>
        </button>
      </div>
      <div className="product-card__body">
        <h2 className="product-card__title">{product.title.toUpperCase()}</h2>
        <p className="product-card__pricing">
          Sign in or Create an account to see pricing
        </p>
      </div>
    </article>
  );
}
