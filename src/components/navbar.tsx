import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/images/logo_uPets.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "Inicio",
      path: "/",
      subItems: ["Perros", "Gatos", "Ofertas"],
    },
    {
      name: "Tienda",
      path: "/tienda",
      subItems: ["Perros", "Gatos", "Ofertas"],
    },
    {
      name: "Servicios",
      path: "/servicios",
      subItems: ["Peluquería", "Veterinaria a domicilio", "gaston"],
    },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img
              src="src\assets\images\logo_uPets.png"
              alt="UrbanPets Logo"
              className="h-15"
            />
          </Link>

          <div className="flex justify-start md:flex w-150 space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className="text-gray-700 hover:text-orange-500 font-medium transition"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition font-medium">
              15% OFF en tu primera compra
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          {menuItems.map((item) => (
            <div key={item.name} className="mb-2">
              <Link
                to={item.path}
                className="block py-2 text-gray-700 hover:text-orange-500 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
              {item.subItems && (
                <div className="ml-4 mt-1">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem}
                      to={`${item.path}/${subItem
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="block py-1 text-gray-600 hover:text-orange-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
