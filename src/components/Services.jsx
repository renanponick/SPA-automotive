import { motion } from 'framer-motion';
import {
  Wrench,
  Settings,
  Battery,
  Droplet,
  Wind,
  Gauge,
  Zap,
  Car,
  Shield,
  Clock,
  CircuitBoard,
  Disc,
} from 'lucide-react';
import { Button } from './ui/button';

const Services = () => {
  const services = [
    {
      category: 'Manutenção Preventiva',
      icon: Wrench,
      color: 'text-blue-500',
      items: [
        {
          name: 'Troca de Óleo e Filtros',
          description: 'Manutenção completa do sistema de lubrificação',
          icon: Droplet,
        },
        {
          name: 'Verificação de Freios e Suspensão',
          description: 'Inspeção e manutenção para sua segurança',
          icon: Disc,
        },
        {
          name: 'Alinhamento e Balanceamento',
          description: 'Precisão e economia de combustível',
          icon: Gauge,
        },
      ],
    },
    {
      category: 'Reparos e Diagnósticos',
      icon: Settings,
      color: 'text-orange-500',
      items: [
        {
          name: 'Injeção Eletrônica',
          description: 'Diagnóstico e reparo de sistemas eletrônicos',
          icon: CircuitBoard,
        },
        {
          name: 'Embreagem e Câmbio',
          description: 'Manutenção e troca de componentes',
          icon: Settings,
        },
        {
          name: 'Sistema de Arrefecimento',
          description: 'Prevenção de superaquecimento',
          icon: Wind,
        },
      ],
    },
    {
      category: 'Elétrica e Baterias',
      icon: Battery,
      color: 'text-yellow-500',
      items: [
        {
          name: 'Diagnóstico de Bateria',
          description: 'Teste e substituição de baterias',
          icon: Battery,
        },
        {
          name: 'Alternador e Motor de Partida',
          description: 'Reparo e manutenção elétrica',
          icon: Zap,
        },
        {
          name: 'Instalação de Acessórios',
          description: 'Som, alarme e outros acessórios',
          icon: CircuitBoard,
        },
      ],
    },
    {
      category: 'Serviços Complementares',
      icon: Car,
      color: 'text-green-500',
      items: [
        {
          name: 'Higienização do Ar-Condicionado',
          description: 'Limpeza e manutenção do sistema',
          icon: Wind,
        },
        {
          name: 'Revisão Pré-Viagem',
          description: 'Checklist completo para viagens seguras',
          icon: Shield,
        },
        {
          name: 'Troca de Pneus',
          description: 'Montagem e balanceamento',
          icon: Car,
        },
      ],
    },
  ];

  const openWhatsApp = (serviceName) => {
    const message = `Olá, gostaria de agendar o serviço: ${serviceName}`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas para manutenção e reparo do seu veículo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className={`h-8 w-8 ${category.color}`} />
                <h3 className="text-2xl font-bold">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.items.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + serviceIndex * 0.05 }}
                    className="flex items-start gap-4 p-4 bg-background rounded-lg hover:bg-accent transition-colors"
                  >
                    <service.icon className={`h-6 w-6 ${category.color} mt-1 flex-shrink-0`} />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{service.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {service.description}
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openWhatsApp(service.name)}
                        className="text-xs"
                      >
                        Agendar via WhatsApp
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Não encontrou o serviço que procura?
          </p>
          <Button
            size="lg"
            onClick={() => openWhatsApp('Consulta sobre serviços')}
            className="bg-orange-500 hover:bg-orange-600"
          >
            Entre em Contato
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

