import { useState } from "react";
import { Link } from "react-router-dom";
import { LoadingSpinner } from "../components/loadingSpinner";

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  category: "veterinaria" | "peluqueria" | "entrenamiento";
  featured?: boolean;
}

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const Servicios = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petName: "",
    serviceId: "",
    notes: "",
  });

  const services: Service[] = [
    {
      id: 1,
      name: "Consulta Veterinaria a Domicilio",
      description:
        "Examen completo de salud para tu mascota en la comodidad de tu hogar",
      price: 45,
      duration: "45 min",
      image: "src/assets/images/consulta.jpg",
      category: "veterinaria",
      featured: true,
    },
    {
      id: 2,
      name: "Baño y Corte de Pelo Premium",
      description:
        "Servicio completo de peluquería con productos hipoalergénicos",
      price: 35,
      duration: "2 horas",
      image: "src/assets/images/spa.jpg",
      category: "peluqueria",
    },
    {
      id: 3,
      name: "Entrenamiento Básico",
      description: "4 sesiones de obediencia básica para perros",
      price: 120,
      duration: "4 semanas",
      image: "/images/entrenamiento-basico.jpg",
      category: "entrenamiento",
    },
    {
      id: 4,
      name: "Vacunación a Domicilio",
      description: "Aplicación de vacunas según calendario veterinario",
      price: 30,
      duration: "30 min",
      image: "/images/vacunacion-domicilio.jpg",
      category: "veterinaria",
    },
    {
      id: 5,
      name: "Spa para Mascotas",
      description: "Baño relajante, corte de uñas y limpieza de oídos",
      price: 50,
      duration: "1.5 horas",
      image: "src/assets/images/spa.jpg",
      category: "peluqueria",
      featured: true,
    },
  ];

  const categories: ServiceCategory[] = [
    {
      id: "veterinaria",
      name: "Veterinaria",
      description: "Servicios médicos profesionales a domicilio",
      icon: "",
    },
    {
      id: "peluqueria",
      name: "Peluquería",
      description: "Cuidado estético y baños profesionales",
      icon: "",
    },
    {
      id: "entrenamiento",
      name: "Entrenamiento",
      description: "Programas de obediencia y comportamiento",
      icon: "",
    },
  ];

  const featuredServices = services.filter((service) => service.featured);
  const testimonials = [
    {
      quote:
        "El veterinario a domicilio salvó a mi gato cuando tenía una emergencia a medianoche. ¡Profesionales increíbles!",
      author: "Lucía M.",
      service: "Urgencias Veterinarias",
    },
    {
      quote:
        "Mi perro odiaba ir a la peluquería hasta que probamos el servicio a domicilio. Ahora está tranquilo y luce genial.",
      author: "Carlos R.",
      service: "Peluquería a Domicilio",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Datos enviados:", { ...formData, date: selectedDate });
      setIsSubmitting(false);
      alert("¡Reserva solicitada con éxito! Nos contactaremos para confirmar.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        petName: "",
        serviceId: "",
        notes: "",
      });
      setSelectedDate("");
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-orange-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Servicios Premium
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Cuidado profesional para tu mascota en la comodidad de tu hogar
          </p>
        </div>
      </div>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Nuestros <span className="text-orange-500">servicios estrella</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-orange-500 font-bold text-lg">
                      ${service.price}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">
                      ({service.duration})
                    </span>
                  </div>
                  <Link
                    to="#reserva"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition text-sm"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        serviceId: service.id.toString(),
                      }))
                    }
                  >
                    Reservar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nuestras <span className="text-orange-500">áreas de servicio</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => {
              const categoryServices = services.filter(
                (s) => s.category === category.id
              );

              return (
                <div
                  key={category.id}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition"
                >
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>

                  <ul className="space-y-2">
                    {categoryServices.map((service) => (
                      <li
                        key={service.id}
                        className="flex justify-between items-center border-b border-gray-200 pb-2"
                      >
                        <span>{service.name}</span>
                        <span className="text-orange-500 font-medium">
                          ${service.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="reserva" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-orange-500 text-white p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4">Reserva tu servicio</h2>
                <p className="mb-6">
                  Completa el formulario y nos contactaremos para confirmar tu
                  cita en las próximas 24 horas.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-white text-orange-500 rounded-full p-2 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Horario Flexible</h4>
                      <p className="text-sm">De lunes a domingo, 8am a 8pm</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-white text-orange-500 rounded-full p-2 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Confirmación Rápida</h4>
                      <p className="text-sm">
                        Te llamaremos para confirmar tu cita
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 p-8">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="petName"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Nombre de tu mascota
                    </label>
                    <input
                      type="text"
                      id="petName"
                      name="petName"
                      value={formData.petName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="serviceId"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Servicio
                      </label>
                      <select
                        id="serviceId"
                        name="serviceId"
                        value={formData.serviceId}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                        required
                      >
                        <option value="">Seleccionar servicio</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="date"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Fecha preferida
                      </label>
                      <input
                        type="date"
                        id="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="notes"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Notas adicionales
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner
                          size="sm"
                          color="white"
                          className="mr-2"
                        />
                        Procesando...
                      </>
                    ) : (
                      "Solicitar reserva"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Lo que dicen dueños <span className="text-orange-500">felices</span>
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
                    <p className="text-sm text-gray-500">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
