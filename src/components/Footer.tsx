import agentHubLogo from "@/assets/agenthub-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <img src={agentHubLogo} alt="AgentHub" className="h-8 w-auto mb-4" />
            <p className="text-white/80 text-sm">
              Transformando la práctica legal con IA
            </p>
          </div>
          
          <div className="text-center">
            <nav className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#inicio" className="text-white/80 hover:text-white">Inicio</a>
              <a href="#beneficios" className="text-white/80 hover:text-white">Beneficios</a>
              <a href="#planes" className="text-white/80 hover:text-white">Precios</a>
              <a href="#contacto" className="text-white/80 hover:text-white">Contacto</a>
            </nav>
          </div>
          
          <div className="text-right">
            <p className="text-white/60 text-sm">© AgentHub 2025</p>
            <a href="#" className="text-white/60 hover:text-white/80 text-xs">Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;