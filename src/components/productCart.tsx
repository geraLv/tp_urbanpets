import { Link } from "react-router-dom";
import type Product from "../types";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflsow-hidden hover:shadow-lg transition transform hover:-translate-y-1 h-full flex flex-col">
      <div className="flex justify-center items-center relative h-70 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="p-8 w-auto h-60 object-cover transition duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
          {product.stock < 5 && (
            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
              Últimas {product.stock} unidades
            </span>
          )}
        </div>

        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {product.description}
        </p>

        <div className="flex items-center mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`h-4 w-4 ${
                  star <= Math.round(product.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-600 text-xs ml-1">({product.rating})</span>
        </div>

        <div className="flex justify-between items-center mt-auto">
          <div>
            <span className="text-lg font-bold text-orange-500">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-gray-400 line-through text-sm">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <Link
            to={`/producto/${product.id}`}
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition flex items-center text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            Comprar
          </Link>
        </div>
      </div>
    </div>
  );
};
