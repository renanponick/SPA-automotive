import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: 'Carlos Silva',
      rating: 5,
      comment: 'Excelente atendimento! Resolveram o problema do meu carro rapidamente e com preço justo. Super recomendo!',
      date: 'Há 2 semanas',
    },
    {
      name: 'Maria Santos',
      rating: 5,
      comment: 'Profissionais muito competentes. Explicaram tudo detalhadamente e o serviço ficou perfeito. Voltarei sempre!',
      date: 'Há 1 mês',
    },
    {
      name: 'João Oliveira',
      rating: 5,
      comment: 'Melhor oficina da região! Atendimento honesto, trabalho de qualidade e preços justos. Parabéns!',
      date: 'Há 3 semanas',
    },
    {
      name: 'Ana Paula',
      rating: 5,
      comment: 'Fui muito bem atendida. A equipe é super atenciosa e o serviço ficou impecável. Recomendo de olhos fechados!',
      date: 'Há 1 semana',
    },
    {
      name: 'Roberto Costa',
      rating: 5,
      comment: 'Oficina de confiança! Já levo meu carro há anos e nunca tive problemas. Serviço sempre de primeira qualidade.',
      date: 'Há 2 meses',
    },
    {
      name: 'Fernanda Lima',
      rating: 5,
      comment: 'Adorei o atendimento! Foram transparentes com o orçamento e entregaram no prazo. Super satisfeita!',
      date: 'Há 4 semanas',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">O Que Dizem Nossos Clientes</h2>
          <p className="text-xl text-muted-foreground">
            Mais de 500 clientes satisfeitos com nossos serviços
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-lg p-8 md:p-12 relative"
          >
            <Quote className="absolute top-4 left-4 h-12 w-12 text-orange-500/20" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-orange-500 rounded-full h-16 w-16 flex items-center justify-center text-white text-2xl font-bold">
                {reviews[currentIndex].name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-lg">{reviews[currentIndex].name}</h4>
                <div className="flex gap-1 mt-1">
                  {renderStars(reviews[currentIndex].rating)}
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-4 italic">
              "{reviews[currentIndex].comment}"
            </p>

            <p className="text-sm text-muted-foreground">
              {reviews[currentIndex].date}
            </p>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-orange-500'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-500 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <div className="flex gap-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                {review.comment}
              </p>
              <p className="text-xs text-muted-foreground">{review.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

