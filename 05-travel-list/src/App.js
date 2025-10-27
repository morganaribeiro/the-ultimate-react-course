import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passaportes", quantity: 2, packed: false },
  { id: 2, description: "Meias", quantity: 12, packed: false },
  { id: 3, description: "Carregador", quantity: 1, packed: true },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((items) => [...items, item]); // Cria um novo array com os itens atuais + o novo item no final da lista
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 🧳</h1>
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if(!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);
    setDescription(""); // resetar campo depois de add
    setQuantity(1); // resetar campo depois de add
  }

  return (
    <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
      <h3>O que você precisa para sua 😍 viagem?</h3>
      <select 
        value={quantity}
        onChange={(e) => 
          setQuantity(Number(e.target.value))
        }
      >
        {/* Dica para preencher array com 20 posições automaticamente */}
        {Array.from({ length: 20}, (_, i) => i + 1).map
        ((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input 
        type="text" 
        placeholder="Item ..." 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Adicionar</button>
    </form>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through"} : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>🧳 Você tem X itens na sua lista, você já embalou X (X%)</em>
  </footer>
  );
}

