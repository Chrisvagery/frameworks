# frameworks
Express
# Express.js

- **Nome do framework:** Express.js
- **Ano de lançamento:** 2010
- **Desenvolvedor:** TJ Holowaychuk
- **Linguagem de programação:** JavaScript (Node.js)
- **Quando é recomendado utilizar o framework:** Express.js é recomendado para desenvolvimento de aplicações web, APIs e servidores web em Node.js. É amplamente utilizado em projetos que requerem uma estrutura flexível e minimalista para lidar com rotas, middlewares e interações com o servidor HTTP.

## Principais Características

1. **Minimalismo:** Express.js é conhecido por sua abordagem minimalista, fornecendo apenas as funcionalidades essenciais para o desenvolvimento de aplicações web, o que o torna leve e flexível.
   
2. **Robustez:** Apesar de sua simplicidade, Express.js é robusto o suficiente para lidar com grandes volumes de tráfego e escalabilidade, sendo utilizado em diversos projetos de grande porte.
   
3. **Extensibilidade:** Express.js permite a fácil integração de diversos pacotes e middlewares para estender suas funcionalidades de acordo com as necessidades do projeto.

- **Vídeo, Podcast ou Artigo:**
  - [Express.js Crash Course - Traversy Media](https://www.youtube.com/watch?v=L72fhGm1tfE) - Este vídeo oferece uma introdução prática ao Express.js, abordando desde os conceitos básicos até funcionalidades avançadas.

- **Site Oficial:** [Express.js](https://expressjs.com/)

---

## Exemplo Prático: Sistema de Votação para uma Enquete em Tempo Real

Neste exemplo, vamos criar um simples sistema de votação utilizando Express.js. Este sistema permitirá que os usuários votem em opções de uma enquete em tempo real, atualizando automaticamente os resultados sem a necessidade de recarregar a página.

### Passos:

1. **Instalação de Dependências:**
   Certifique-se de ter o Node.js instalado no seu sistema. Inicie um novo projeto Node.js e instale as dependências necessárias:

   ```bash
   mkdir sistema-votacao
   cd sistema-votacao
   npm init -y
   npm install express socket.io
