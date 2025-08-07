import React from 'react';
import AdminPanel from './AdminPanel';
import LoginForm from './LoginForm';

function Name() {
  function helper() {
    alert("ntg much");
  }

  return (
    <button onClick={helper}>
      click this
    </button>
  );
}

function Profile({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <AdminPanel /> : <LoginForm />}
    </div>
  );
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen',
      }}
    >
      {product.title}
    </li>
  ));

  return (
    <div>
      <ul>{listItems}</ul>
      
      <Name />
    </div>
  );
}
