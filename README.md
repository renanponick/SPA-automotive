# Oficina Mecânica Premium - SPA

Uma Single Page Application moderna e responsiva para oficina mecânica automotiva, desenvolvida com React, TypeScript, Tailwind CSS e Framer Motion.

## 🚀 Características

- **Design Moderno e Responsivo**: Interface profissional que funciona perfeitamente em dispositivos móveis, tablets e desktops
- **Tema Dark/Light**: Alternância de tema com persistência no localStorage
- **Animações Suaves**: Transições elegantes usando Framer Motion
- **Componentes Reutilizáveis**: Código modular e bem organizado
- **SEO Otimizado**: Meta tags configuradas para melhor indexação
- **WhatsApp Integration**: Botão flutuante e integração direta com WhatsApp

## 📋 Seções

1. **Hero**: Seção de destaque com chamada para ação
2. **Serviços**: Catálogo completo de serviços oferecidos
3. **Sobre**: Informações sobre a oficina e diferenciais
4. **Avaliações**: Depoimentos de clientes com carrossel automático
5. **Contato**: Formulário de contato e informações de localização
6. **Footer**: Rodapé com links rápidos e informações de contato

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces
- **Vite**: Build tool rápido e moderno
- **Tailwind CSS**: Framework CSS utilitário
- **Framer Motion**: Biblioteca de animações
- **Lucide React**: Ícones modernos
- **shadcn/ui**: Componentes UI de alta qualidade

## 📦 Instalação

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm run dev

# Build para produção
pnpm run build

# Preview da build de produção
pnpm run preview
```

## 🎨 Personalização

### Cores

As cores podem ser personalizadas no arquivo `src/App.css` nas variáveis CSS:

- **Light Mode**: Tons de branco, cinza-claro e laranja
- **Dark Mode**: Tons de cinza-escuro, preto e laranja

### Conteúdo

Para personalizar o conteúdo:

1. **Informações de Contato**: Edite os componentes `Contact.jsx` e `Footer.jsx`
2. **Serviços**: Modifique o array `services` em `Services.jsx`
3. **Avaliações**: Atualize o array `reviews` em `Reviews.jsx`
4. **WhatsApp**: Altere o número de telefone em `WhatsAppButton.jsx` e outros componentes

### Imagens

Adicione suas próprias imagens na pasta `src/assets/` e importe-as nos componentes.

## 📱 Integração WhatsApp

O número de WhatsApp está configurado como `5511999999999`. Para alterar:

1. Busque por `5511999999999` em todos os arquivos
2. Substitua pelo seu número no formato internacional (sem espaços ou caracteres especiais)

## 🌐 Deploy

O projeto pode ser facilmente deployado em plataformas como:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 📄 Estrutura de Pastas

```
src/
├── assets/          # Imagens e recursos estáticos
├── components/      # Componentes React
│   ├── ui/         # Componentes UI do shadcn
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── About.jsx
│   ├── Reviews.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── WhatsAppButton.jsx
├── context/         # Context API (Theme)
├── App.css         # Estilos globais e tema
├── App.jsx         # Componente principal
└── main.jsx        # Entry point
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📝 Licença

Este projeto está sob a licença MIT.

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através do WhatsApp ou e-mail disponíveis no site.

---

Desenvolvido com ❤️ para Oficina Mecânica Premium

