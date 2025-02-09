import React from 'react';
import { Phone, Clock, Scissors, MapPin, MessageSquare, MessageCircle } from 'lucide-react';

function App() {
  // Função para abrir WhatsApp com mensagem predefinida
  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20agendar%20um%20horário', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white font-['Open_Sans']">
      {/* Header */}
      <header className="fixed w-full bg-[#1A1A1A]/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Scissors className="w-8 h-8 text-[#C4A484]" />
            <span className="font-['Montserrat'] font-bold text-xl">VINTAGE CUTS</span>
          </div>
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#C4A484] hover:bg-[#C4A484]/90 transition-all px-6 py-2 rounded-full font-semibold"
          >
            Agendar Agora
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1920&q=80"
          alt="Barbershop Interior"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="font-['Montserrat'] font-bold text-4xl md:text-6xl max-w-2xl leading-tight mb-6">
            Transforme Seu Visual com Estilo e Tradição
          </h1>
          <p className="text-xl md:text-2xl max-w-xl mb-8 text-gray-200">
            Mais que um corte, uma experiência única de cuidado e estilo para o homem moderno
          </p>
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#C4A484] hover:bg-[#C4A484]/90 transition-all px-8 py-3 rounded-full font-semibold text-lg w-fit"
          >
            Agende Seu Horário
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#1A1A1A]" id="booking">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-12 text-center">
            Nossos Serviços
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Corte Clássico', price: 'R$ 60', time: '45 min' },
              { title: 'Barba', price: 'R$ 40', time: '30 min' },
              { title: 'Combo Completo', price: 'R$ 90', time: '1h 15min' },
            ].map((service) => (
              <div key={service.title} className="bg-[#2A2A2A] p-6 rounded-lg hover:scale-105 transition-transform">
                <h3 className="font-['Montserrat'] font-bold text-xl mb-4">{service.title}</h3>
                <p className="text-[#C4A484] font-bold text-2xl mb-2">{service.price}</p>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{service.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#2A2A2A]">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-12 text-center">
            Localização e Contato
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-[#C4A484]" />
                <p>Rua Example, 123 - São Paulo, SP</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#C4A484]" />
                <p>(11) 99999-9999</p>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-[#C4A484]" />
                <div>
                  <p>Segunda à Sábado</p>
                  <p className="text-gray-400">09:00 - 20:00</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1A1A1A] p-8 rounded-lg">
              <h3 className="font-['Montserrat'] font-bold text-2xl mb-6">Agende Seu Horário</h3>
              <button 
                onClick={openWhatsApp}
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#25D366]/90 transition-all px-6 py-3 rounded-lg font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 bg-[#25D366] hover:scale-110 transition-transform duration-300 p-4 rounded-full shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;