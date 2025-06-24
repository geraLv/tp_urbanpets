import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  category: "perros" | "gatos";
}

interface Testimonial {
  quote: string;
  author: string;
  pet: string;
}

export const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setTimeout(() => {
        setFeaturedProducts([
          {
            id: 1,
            name: "Alimento Premium para Gatos",
            price: 25,
            originalPrice: 30,
            image: "src/assets/images/alimento_premiun_gato.jpg",
            description:
              "Incluye alimento natural, juguete interactivo y cepillo suave",
            category: "gatos",
          },
          {
            id: 2,
            name: "Collar Urban para Perros",
            price: 28,
            originalPrice: 35,
            image: "src/assets/images/collar_perros_elegante.jpg",
            description: "Material resistente al agua con diseño moderno",
            category: "perros",
          },
          {
            id: 3,
            name: "Snacks Saludables para Gatos",
            price: 15,
            image: "src/assets/images/snak_gatos.jpg",
            description: "Premios naturales sin aditivos artificiales",
            category: "gatos",
          },
        ]);
        setIsLoading(false);
      }, 800);
    };

    fetchProducts();
  }, []);

  const testimonials: Testimonial[] = [
    {
      quote:
        "El servicio de peluquería a domicilio salvó mis fines de semana. ¡Mi golden retriever queda perfecto!",
      author: "Maria L., Buenos Aires",
      pet: "Golden Retriever",
    },
    {
      quote:
        "Desde que usa el alimento premium, el pelaje de mi gato siamés brilla como nunca",
      author: "Carlos M., Córdoba",
      pet: "Gato Siamés",
    },
  ];

  return (
    <div className="homepage">
      <section className="relative bg-gradient-to-r from-orange-50 to-blue-50 overflow-hidden">
        <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Cuidado <span className="text-orange-500">premium</span> para tus
              compañeros urbanos
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Productos diseñados por expertos y servicios a domicilio para la
              vida moderna con mascotas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/tienda"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-center transition transform hover:scale-105 shadow-lg"
              >
                Descubre nuestros productos
              </Link>
              <Link
                to="/servicios"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-bold py-3 px-8 rounded-lg text-center transition"
              >
                Conoce nuestros servicios
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src="src\assets\images\img_home.webp"
              alt="Perro y gato felices con productos UrbanPets"
              className="rounded-lg shadow-blue-50 shadow-xl w-full max-w-md mx-auto animate-float"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-100 rounded-full w-32 h-32 z-0 hidden md:block"></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Más que una tienda,{" "}
              <span className="text-orange-500">un estilo de vida</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              UrbanPets combina productos de alta calidad con servicios
              exclusivos para dueños exigentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏙️",
                title: "Diseño urbano",
                description:
                  "Productos que se adaptan a espacios pequeños sin sacrificar estilo",
              },
              {
                icon: "🔬",
                title: "Calidad certificada",
                description:
                  "Todos nuestros productos pasan rigurosos controles veterinarios",
              },
              {
                icon: "⏱️",
                title: "Ahorro de tiempo",
                description: "Servicios a domicilio que se adaptan a tu agenda",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition cursor-default text-center"
              >
                <span className="text-5xl mb-6 inline-block">{item.icon}</span>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Nuestros{" "}
                <span className="text-orange-500">productos estrella</span>
              </h2>
              <p className="text-gray-600">
                Seleccionados cuidadosamente por nuestro equipo de expertos
              </p>
            </div>
            <Link
              to="/tienda"
              className="mt-4 md:mt-0 inline-flex items-center text-orange-500 font-semibold hover:underline group"
            >
              Ver catálogo completo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1 group-hover:translate-x-1 transition"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden h-90 w-full p-10">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-2xl font-bold text-orange-500">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="ml-2 text-gray-400 line-through text-sm">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <Link
                        to={`/tienda/${product.id}`}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
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
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Historias de{" "}
            <span className="text-orange-500">mascotas felices</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 relative hover:shadow-md transition"
              >
                <p className="text-lg italic mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="bg-orange-100 w-10 h-10 rounded-full flex items-center justify-center text-orange-500 font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.pet}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Únete a la comunidad UrbanPets
            </h2>
            <p className="text-xl mb-8">
              Recibe consejos expertos, ofertas exclusivas y un 15% de descuento
              en tu primera compra.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-grow px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-200"
                required
              />
              <button
                type="submit"
                className="bg-white text-orange-500 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition shadow-lg transform hover:scale-105"
              >
                Suscribirme
              </button>
            </form>

            <p className="text-sm mt-4 opacity-80">
              Nos preocupamos por tu privacidad. Nunca compartiremos tu email.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
