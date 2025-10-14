import { motion } from 'framer-motion';
import { Wrench, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Avaliações', href: '#reviews' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">Oficina Premium</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Transparência e confiança sobre quatro rodas.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => window.open('https://instagram.com', '_blank')}
                className="bg-accent hover:bg-orange-500 hover:text-white p-2 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </button>
              <button
                onClick={() => window.open('https://facebook.com', '_blank')}
                className="bg-accent hover:bg-orange-500 hover:text-white p-2 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Manutenção Preventiva</li>
              <li>Reparos e Diagnósticos</li>
              <li>Elétrica e Baterias</li>
              <li>Serviços Complementares</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Rua das Oficinas, 123<br />
                  São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-sm">(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-sm">contato@oficinapremium.com.br</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>
            © {currentYear} Oficina Premium. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

