# 🧠 WorkSphere – Plataforma Profissional Interativa
## Global Solution – Front-End Design / Web Development – 2º Semestre (2025)

---

## 🏆 Resumo do Projeto

O **WorkSphere** é uma plataforma web inspirada em redes profissionais modernas, com o objetivo de conectar pessoas, competências e propósito, alinhando-se ao tema da Global Solution: *O Futuro do Trabalho*.  

A aplicação permite explorar perfis profissionais fictícios, visualizar informações pessoais, acadêmicas e comportamentais, além de contar com **busca, filtros, modais interativos e dark mode**.  
Toda a interface foi construída com foco em acessibilidade, responsividade, experiência do usuário e modernidade visual.

---

## ⚙️ Tecnologias Utilizadas

- React.js  
- Vite  
- HTML5  
- Tailwind CSS  
- JavaScript (ES6+)  
- JSON local com mais de 60 perfis simulados  
- Git + GitHub

---

## 💡 Funcionalidades Principais

### 🔍 Listagem de profissionais
- Cards com foto, nome, cargo e principais skills  
- Carregamento dinâmico via JSON local

### 🪟 Modal interativa
Ao clicar no card, abre-se um modal contendo:
- Informações pessoais  
- Formação acadêmica  
- Experiências profissionais  
- Hard skills e Soft skills  
- Hobbies e interesses  
- Botões funcionais:
  - Recomendar profissional
  - Enviar mensagem

### 🔎 Sistema de Busca e Filtros
- Filtro por área  
- Filtro por cidade  
- Filtro por tecnologia  
- Busca por nome  
- Exibição de mensagens quando nenhum resultado é encontrado

### 🎨 Design e Acessibilidade
- Layout totalmente responsivo  
- Interface moderna construída com Tailwind  
- Dark Mode funcional  
- Microinterações e feedbacks visuais

---

## 🚀 Como Executar o Projeto Localmente

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/ManoFelpo/GS-Web-Front.git
```

### 2️⃣ Acessar a pasta do projeto
```bash
cd GS-Web-Front
```

### 3️⃣ Instalar dependências
```bash
npm install
```

### 4️⃣ Rodar o servidor
```bash
npm run dev
```

Acesse em: **http://localhost:3000/**

---

## 🔗 Link do Repositório
👉 https://github.com/ManoFelpo/GS-Web-Front.git  

---

## 👥 Integrantes
| Nome | RM |
|------|------|
| Felipe Santos Nunes | 563919 |

---

## 🧠 Aprendizados Durante o Desenvolvimento

- Desenvolvimento de SPA com React e Tailwind  
- Organização de componentes reutilizáveis  
- Criação de modais interativos e funcionais  
- Utilização de JSON local como base de dados  
- Implementação de filtros, busca e mensagens de estado  
- Responsividade e estrutura mobile-first  
- Aprofundamento em Git e versionamento  
- Aplicação de heurísticas de usabilidade  
- Construção de um Dark Mode completo  

---

## 📄 Exemplo da Estrutura JSON Utilizada

```json
{
  "id": 1,
  "nome": "Ana Carolina Ribeiro",
  "foto": "./images/profissional01.jpg",
  "cargo": "UI/UX Designer",
  "resumo": "Designer focada em soluções digitais centradas no usuário",
  "localizacao": "São Paulo/SP",
  "area": "Design",
  "habilidadesTecnicas": ["Figma", "Prototipação", "UX Research"],
  "softSkills": ["Comunicação", "Empatia"],
  "experiencias": [
    {
      "empresa": "Agência Criativa",
      "cargo": "UX Designer",
      "inicio": "2021-03",
      "fim": "2024-01",
      "descricao": "Responsável por pesquisas, entrevistas e testes de usabilidade."
    }
  ],
  "formacao": [
    {
      "curso": "Design Digital",
      "instituicao": "FIAP",
      "ano": 2023
    }
  ],
  "projetos": [
    {
      "titulo": "Redesign App Saúde+",
      "link": "https://portfolio.com/ana",
      "descricao": "Projeto completo de UX/UI para um app de saúde pública."
    }
  ],
  "certificacoes": ["UX-PM Nível 1"],
  "idiomas": [{ "idioma": "Inglês", "nivel": "Avançado" }],
  "areaInteresses": ["Acessibilidade", "Design Inclusivo"]
}
```

---
