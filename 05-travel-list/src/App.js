import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]); // Cria um novo array com os itens atuais + o novo item no final da lista
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter((item) => item.id !== id));
  };

  function handleToggleItem(id) {
    setItems(items => 
      items.map((item) => 
        item.id === id ? { ...item, packed: !item.packed } 
        : item
      )
    )
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList 
        items={items} 
        onDeleteItem={handleDeleteItem} 
        onToggleItem={handleToggleItem} 
      />
      <Stats items={items} />
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

function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
      {items.map((item) => (
        <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
      ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem , onToggleItem }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through"} : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  if(!items.length) return (
    <p className="stats">
      <em>Comece a adicionar alguns itens à sua lista de bagagem 🚀</em>
    </p>
  );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round(numPacked / numItems * 100); // Porcentagem de items embalados.

  return (
    <footer className="stats">
      <em>
      {percentage === 100 
        ? "Você tem tudo! Pronto para ir ✈" 
        : ` 🧳 Você tem ${numItems} itens na sua lista, você já embalou
        ${numPacked} (${percentage}%)` }
      </em>
    </footer>
  );
}

