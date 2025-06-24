import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductCard } from "../components/productCart";
import { LoadingSpinner } from "../components/loadingSpinner";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  category: "perros" | "gatos" | "accesorios";
  rating: number;
  stock: number;
}

export const Tienda = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const category = searchParams.get("category") || "todos";

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        setTimeout(() => {
          const mockProducts: Product[] = [
            {
              id: 1,
              name: "Alimento Premium para Gatos",
              price: 25,
              originalPrice: 30,
              image: "src/assets/images/alimento_premiun_gato.jpg",
              description: "Alimento balanceado con ingredientes naturales",
              category: "gatos",
              rating: 4.8,
              stock: 15,
            },
            {
              id: 2,
              name: "Collar Elegante para Perros",
              price: 18,
              image: "src/assets/images/collar_perros_elegante.jpg",
              description: "Collar ajustable con diseño moderno",
              category: "perros",
              rating: 4.5,
              stock: 20,
            },
            {
              id: 3,
              name: "Juguete Interactivo para Gatos",
              price: 12,
              originalPrice: 15,
              image: "src/assets/images/juguete_gatos_pluma.jpg",
              description: "Juguete con plumas y sonajero",
              category: "gatos",
              rating: 4.7,
              stock: 8,
            },
            {
              id: 4,
              name: "Cama Premium para Perros",
              price: 45,
              image: "src/assets/images/cama_perros.jpg",
              description: "Cama ortopédica con memory foam",
              category: "perros",
              rating: 4.9,
              stock: 5,
            },
            {
              id: 5,
              name: "Arnés Urbano para Perros",
              price: 32,
              originalPrice: 40,
              image: "src//assets/images/arnes_perros.jpg",
              description: "Arnés reflectante para paseos nocturnos",
              category: "perros",
              rating: 4.6,
              stock: 12,
            },
            {
              id: 6,
              name: "Rascador para Gatos",
              price: 28,
              image: "src/assets/images/rascador.jpg",
              description: "Rascador de sisal con plataformas",
              category: "gatos",
              rating: 4.4,
              stock: 7,
            },
          ];
          setProducts(mockProducts);
          setIsLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let result = products;

    if (category !== "todos") {
      result = result.filter((product) => product.category === category);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(term) ||
          product.description.toLowerCase().includes(term)
      );
    }

    setFilteredProducts(result);
    setCurrentPage(1);
  }, [category, searchTerm, products]);

  const handleCategoryChange = (newCategory: string) => {
    setSearchParams({ category: newCategory });
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestra Tienda
          </h1>
          <p className="text-xl">
            Productos premium para consentir a tu mascota
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div className="flex-grow max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg
                  className="absolute right-3 top-3 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCategoryChange("todos")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  category === "todos"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => handleCategoryChange("perros")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  category === "perros"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                Perros
              </button>
              <button
                onClick={() => handleCategoryChange("gatos")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  category === "gatos"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                Gatos
              </button>
              <button
                onClick={() => handleCategoryChange("accesorios")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  category === "accesorios"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                Accesorios
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Mostrando {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "producto" : "productos"}
              {category !== "todos" && ` en ${category}`}
              {searchTerm && ` para "${searchTerm}"`}
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <LoadingSpinner />
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              No se encontraron productos
            </h3>
            <p className="mt-2 text-gray-500">
              Intenta con otros términos de búsqueda o cambia los filtros
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                handleCategoryChange("todos");
              }}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Ver todos los productos
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <nav
                  className="inline-flex rounded-md shadow-sm -space-x-px"
                  aria-label="Pagination"
                >
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className={`relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                      currentPage === 1
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Anterior
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
                          currentPage === page
                            ? "bg-orange-500 text-white"
                            : "bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className={`relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                      currentPage === totalPages
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Siguiente
                  </button>
                </nav>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
