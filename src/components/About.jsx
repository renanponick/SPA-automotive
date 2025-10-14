import { motion } from 'framer-motion';
import { Award, Users, Wrench, Shield, Clock, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: '10+ Anos de Experiência',
      description: 'Mais de uma década servindo a comunidade com excelência',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais certificados e constantemente atualizados',
    },
    {
      icon: Wrench,
      title: 'Equipamentos Modernos',
      description: 'Tecnologia de ponta para diagnósticos precisos',
    },
    {
      icon: Shield,
      title: 'Garantia de Qualidade',
      description: 'Todos os serviços com garantia e peças originais',
    },
    {
      icon: Clock,
      title: 'Prazos Cumpridos',
      description: 'Compromisso com pontualidade e eficiência',
    },
    {
      icon: Target,
      title: 'Transparência Total',
      description: 'Orçamentos claros e sem custos ocultos',
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sobre a Oficina</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Com mais de 10 anos de experiência, nossa oficina combina tecnologia e conhecimento 
            técnico para oferecer diagnósticos precisos e soluções rápidas. Trabalhamos com todas 
            as marcas e garantimos transparência em cada serviço.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-orange-500/10 p-4 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Nossa Missão</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Proporcionar serviços automotivos de excelência, combinando expertise técnica, 
            equipamentos modernos e atendimento personalizado. Nosso compromisso é manter 
            seu veículo sempre em perfeitas condições, com segurança, qualidade e transparência.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

