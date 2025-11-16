# 🌴 Far Away - Travel Packing List

Uma aplicação React interativa para gerenciar sua lista de itens para viagem. Organize, marque como embalado e acompanhe o progresso de sua embalagem de forma simples e intuitiva.

## 🎯 Sobre o Projeto

**Far Away** é uma aplicação web desenvolvida em React que funciona como um assistente pessoal para preparação de viagens. Permite que você crie uma lista de itens que precisa levar, acompanhe quais foram embalados e veja o progresso em tempo real.

## ✨ Funcionalidades

### 📝 Adicionar Itens
- Digite o nome do item que deseja levar na viagem
- Selecione a quantidade necessária (1-20)
- Clique em "Adicionar" para incluir na lista

### ✅ Marcar como Embalado
- Marque itens como embalados usando o checkbox
- Itens embalados aparecem com linha de corte para melhor visualização
- Desmarque se precisar corrigir

### 🗑️ Remover Itens
- Clique no botão ❌ para remover um item da lista
- A lista se atualiza automaticamente

### 📊 Acompanhar Progresso
- Visualize estatísticas em tempo real
- Veja quantos itens você tem no total
- Veja quantos já foram embalados
- Acompanhe a porcentagem de progresso

## 🚀 Como Usar

### Pré-requisitos
- Node.js (v14 ou superior)
- npm ou yarn

### Instalação

1. Clone ou baixe o projeto
2. Acesse o diretório do projeto
3. Instale as dependências:

```bash
npm install
```

### Executar a Aplicação

Inicie a aplicação em modo desenvolvimento:

```bash
npm start
```

A aplicação abrirá automaticamente em [http://localhost:3000](http://localhost:3000).

### Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

O build otimizado será criado na pasta `build/`.

## 🏗️ Estrutura do Projeto

```
src/
├── App.js           # Componente principal e gerenciamento de estado
├── index.js         # Ponto de entrada da aplicação
└── index.css        # Estilos globais

public/
├── index.html       # HTML principal
├── manifest.json    # Configurações do PWA
└── robots.txt       # Instruções para web crawlers
```

## 🧩 Componentes

### `App` (Componente Principal)
- Gerencia o estado global da lista de itens
- Coordena os handlers de adicionar, deletar e marcar itens como embalados

### `Logo`
- Exibe o cabeçalho da aplicação com o título temático

### `Form`
- Formulário interativo para adicionar novos itens
- Controla seleção de quantidade e descrição do item

### `PackingList`
- Renderiza a lista de itens
- Passa props para cada item individual

### `Item`
- Componente de item individual
- Exibe checkbox, descrição, quantidade e botão de exclusão

### `Stats`
- Exibe estatísticas da lista
- Calcula total de itens, itens embalados e porcentagem de progresso

## 💾 Gerenciamento de Estado

A aplicação utiliza `useState` do React para gerenciar:

```javascript
const [items, setItems] = useState([]);
```

Cada item possui:
```javascript
{
  id: Number,           // Identificador único (baseado em timestamp)
  description: String,  // Descrição do item
  quantity: Number,     // Quantidade do item
  packed: Boolean       // Se foi embalado ou não
}
```

## 🎨 Recursos de UX

- ✨ Interface intuitiva e responsiva
- 📱 Emojis para melhor visualização
- ⌨️ Feedback instantâneo ao adicionar/remover itens
- 📈 Progresso visual em tempo real
- 🎯 Sem necessidade de persistência (dados resetam ao recarregar)

## 🔄 Funcionalidades Técnicas

### Handlers de Estado

- **handleAddItems**: Adiciona novo item ao array
- **handleDeleteItem**: Remove item por ID
- **handleToggleItem**: Marca/desmarca item como embalado

### Recursos React Utilizados

- Hooks: `useState`
- JSX para renderização
- Event handling
- Conditional rendering
- Array methods: `map`, `filter`

## 📋 Possíveis Melhorias Futuras

- 💾 Persistência de dados com LocalStorage
- 🏷️ Categorização de itens
- 🎨 Temas personalizáveis
- 🌍 Suporte a múltiplos idiomas
- 📱 Versão mobile nativa
- ☑️ Edição de itens já adicionados
- 🔍 Busca e filtro de itens

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para UI
- **JavaScript ES6+** - Linguagem de programação
- **CSS3** - Estilização
- **Create React App** - Ferramenta de bootstrap

## 📝 Notas

- A lista é reiniciada ao atualizar a página (sem persistência)
- IDs dos itens são baseados em timestamp (`Date.now()`)
- A quantidade máxima padrão é 20 itens por linha

---

**Divirta-se organizando sua viagem! 🧳✈️**