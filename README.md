# Decisão Brasil 2026 — Guia Cidadão de Alinhamento Presidencial

Aplicação web interativa, responsiva e de alta performance projetada para publicação global na **Vercel**. Apresenta um **teste cego de alinhamento eleitoral** baseado estritamente nas diretrizes oficiais de governo registradas no Tribunal Superior Eleitoral (TSE) para as Eleições Presidenciais de 2026.

---

## 🏛️ Proposta e Metodologia

1. **Teste Cego Imparcial**: O eleitor responde a 7 dilemas centrais do país (economia, segurança, trabalho, meio ambiente, relações exteriores, saúde/educação e instituições democráticas) avaliando apenas o conteúdo das propostas, sem identificação prévia de candidatos ou partidos.
2. **Rigor e Checagem Documental**: Todas as 28 propostas (14 de Luiz Inácio Lula da Silva / PT e 14 de Flávio Bolsonaro / PL) contam com citação direta de capítulos e páginas dos documentos protocolados no TSE.
3. **Contraponto Editorial Sóbrio**: Ao final, o eleitor visualiza sua afinidade percentual e um contraponto analítico aprofundado evidenciando o modelo de reconstrução social, fortalecimento dos serviços públicos e soberania de Lula em contraste com a desregulamentação, privatizações e desmonte social da direita.
4. **Transparência e Auditoria**: Aba com o gabarito das respostas do próprio eleitor e um explorador com mecanismo de busca em tempo real em todas as diretrizes oficiais.
5. **Mobilização Cívica**: Botão otimizado de compartilhamento instantâneo via WhatsApp para viralização em redes e grupos familiares.

---

## 📁 Estrutura do Repositório

```text
├── index.html          # Aplicação principal (Landing, Quiz interativo, Resultados e Gabarito)
├── css/
│   └── style.css       # Estilo editorial sóbrio, responsivo e sem estética genérica de IA
├── js/
│   ├── quiz-data.js    # Banco de dados estruturado das propostas, temas e páginas do TSE
│   └── app.js          # Lógica do quiz, pontuação, contraponto dinâmico, busca e compartilhamento
├── vercel.json         # Configuração de deploy, cabeçalhos de segurança e cache na Vercel
├── .gitignore          # Arquivos e diretórios ignorados pelo Git
└── README.md           # Documentação completa e instruções de deploy
```

---

## 🚀 Como Testar Localmente

Como a aplicação foi construída em padrão web nativo (HTML5, CSS3 e JavaScript puro), ela roda com velocidade instantânea e não necessita de etapas de compilação ou instalação de pacotes pesados.

### Opção 1: Usando Python (já disponível na máquina)
Abra o terminal na pasta do projeto e execute:
```bash
python -m http.server 8000
```
Em seguida, abra o navegador em: [http://localhost:8000](http://localhost:8000)

### Opção 2: VS Code Live Server ou Navegador
Basta abrir diretamente o arquivo `index.html` em qualquer navegador (Chrome, Edge, Firefox, Safari).

---

## 🌐 Como Publicar na Vercel (Passo a Passo)

A publicação na Vercel garante **acesso instantâneo de qualquer lugar do mundo**, com certificado SSL (HTTPS) gratuito, CDN global em borda e alta disponibilidade.

### Passo 1: Inicializar o Repositório Git Local
No terminal da pasta do projeto (`d:\Projetos Dev\Quizz Campanha Vercel`), execute:

```bash
git init
git add .
git commit -m "feat: lancamento do quiz eleitoral decisao brasil 2026"
```

### Passo 2: Criar o Repositório no GitHub
1. Acesse sua conta no [GitHub](https://github.com/) e clique em **New Repository** (Novo Repositório).
2. Dê um nome ao projeto (por exemplo: `quiz-eleicoes-2026` ou `decisao-brasil-2026`).
3. Escolha **Public** (Público) ou **Private** (Privado) e clique em **Create repository**.
4. No terminal da sua máquina, vincule o repositório e envie o código:
```bash
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
git push -u origin main
```

### Passo 3: Conectar à Vercel
1. Acesse o painel da [Vercel](https://vercel.com/) e faça login (recomendado conectar com sua conta do GitHub).
2. Clique no botão **Add New...** -> **Project**.
3. Selecione o repositório que você acabou de subir no GitHub (`quiz-eleicoes-2026`).
4. A Vercel detectará automaticamente que se trata de uma aplicação estática limpa.
5. Clique em **Deploy**.

Em menos de 30 segundos, seu projeto estará no ar com um link mundial gratuito (por exemplo: `https://decisao-brasil-2026.vercel.app`) pronto para receber acessos em celulares e computadores em qualquer parte do planeta! Toda vez que você fizer um `git push`, a Vercel atualizará o site automaticamente.

---

## 🛡️ Privacidade e Segurança
- **Zero armazenamento de dados pessoais**: Todas as respostas são calculadas na memória do navegador do usuário.
- **Cabeçalhos de proteção (HSTS, No-Sniff, X-Frame-Options)** pré-configurados no `vercel.json`.
