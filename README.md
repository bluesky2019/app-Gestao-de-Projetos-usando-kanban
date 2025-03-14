# Projeto de Gestão de Projetos usando Kanban

Este é um projeto de gestão de tarefas utilizando a metodologia Kanban. O objetivo é fornecer uma interface simples e eficiente para gerenciar tarefas em diferentes estágios (To Do, In Progress, Done).

## Tecnologias Utilizadas

- **Frontend**:
  - React
  - Vite
  - Tailwind CSS
  - TypeScript

- **Backend**:
  - Supabase (Banco de dados e autenticação)

## Funcionalidades

- **Quadro Kanban**: Visualize tarefas em colunas (To Do, In Progress, Done).
- **Drag and Drop**: Arraste e solte tarefas entre colunas.
- **Autenticação**: Integração com Supabase para autenticação de usuários.
- **Persistência de Dados**: As tarefas são salvas no banco de dados do Supabase.

## Como Executar o Projeto Localmente

Siga os passos abaixo para rodar o projeto em sua máquina:

### Pré-requisitos

- Node.js (v18 ou superior)
- npm (v9 ou superior)
- Conta no [Supabase](https://supabase.com/) para configurar o banco de dados.

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/bluesky2019/app-Gestao-de-Projetos-usando-kanban.git


Navegue até a pasta do projeto:

bash
Copy
cd app-Gestao-de-Projetos-usando-kanban
Instale as dependências:

bash
Copy
npm install
Configure o Supabase:

Crie um projeto no Supabase.

Configure as variáveis de ambiente no arquivo .env (veja o exemplo abaixo).

Inicie o servidor de desenvolvimento:

bash
Copy
npm run dev
Acesse o projeto no navegador:

Copy
http://localhost:5173
Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

env
Copy
VITE_SUPABASE_URL=SUA_URL_DO_SUPABASE
VITE_SUPABASE_KEY=SUA_CHAVE_DO_SUPABASE
Substitua SUA_URL_DO_SUPABASE e SUA_CHAVE_DO_SUPABASE pelas credenciais do seu projeto no Supabase.

Estrutura do Projeto
Copy
/frontend
├── src
│   ├── components          # Componentes React
│   ├── pages               # Páginas da aplicação
│   ├── services            # Integração com o Supabase
│   ├── App.tsx             # Componente principal
│   ├── main.tsx            # Ponto de entrada da aplicação
│   └── index.css           # Estilos globais
├── public                  # Arquivos estáticos
├── tailwind.config.js      # Configuração do Tailwind CSS
├── postcss.config.cjs      # Configuração do PostCSS
├── tsconfig.json           # Configuração do TypeScript
├── vite.config.ts          # Configuração do Vite
└── README.md               # Documentação do projeto
Contribuição
Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

Faça um fork do projeto.

Crie uma branch para sua feature:

bash
Copy
git checkout -b minha-feature
Faça commit das suas alterações:

bash
Copy
git commit -m "Adicionando nova funcionalidade"
Envie as alterações:

bash
Copy
git push origin minha-feature
Abra um Pull Request no repositório original.

Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Desenvolvido por [Seu Nome]

Copy

---

### **Como Usar**

1. Crie um arquivo `README.md` na raiz do seu projeto.
2. Cole o conteúdo acima no arquivo.
3. Personalize as seções conforme necessário (por exemplo, adicione seu nome na seção "Desenvolvido por").
4. Faça commit e push do arquivo para o GitHub:
   ```bash
   git add README.md
   git commit -m "Adicionando README"
   git push origin main
Explicação das Seções
Título e Descrição: Breve introdução ao projeto.

Tecnologias Utilizadas: Lista das tecnologias usadas no projeto.

Funcionalidades: Descrição das principais funcionalidades.

Como Executar o Projeto: Passos para rodar o projeto localmente.

Estrutura do Projeto: Visão geral da organização do código.

Contribuição: Instruções para contribuir com o projeto.

Licença: Informações sobre a licença do projeto.