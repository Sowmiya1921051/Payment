// CartPage.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/prop-types
const CartPage = ({ cartItems, removeFromCart }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="flex items-center justify-between mb-4 p-4 border rounded-lg shadow-md">
            <div className="flex items-center">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4 rounded-lg" />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-600">₹{item.price}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(index)}
              className="text-red-500 hover:text-red-700"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
