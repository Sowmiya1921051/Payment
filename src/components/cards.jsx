// Cards.js
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartPage from './cart';
import Logo from '../assets/logo.png';
import Food1 from '../assets/f1.jpg';
import Food2 from '../assets/f5.jpg';
import Food3 from '../assets/f3.jpg';
import Food4 from '../assets/f4.jpg';

function Cards() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <div>
      <nav className="flex justify-between items-center bg-blue-500 py-4 px-6">
        <img className='w-10' src={Logo} alt="" />
        <Link to='/cart' className="text-white">
          Cart ({cartItems.length})
        </Link>
      </nav>

      <Routes>
        <Route 
          path="/" 
          element={
            <div className="p-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={Food1} alt="Food 1" className="w-full h-48 object-cover" />
                <div className="p-4 flex flex-col items-center">
                  <h2 className="text-xl font-semibold">Food Item 1</h2>
                  <p className="mt-2 text-gray-600">Delicious food description goes here.</p>
                  <p className="mt-2 text-gray-800 font-bold">₹500</p>
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="text-blue-500 text-xl hover:text-blue-900 cursor-pointer"
                    onClick={() => addToCart({
                      name: "Food Item 1",
                      image: Food1,
                      price: 500
                    })}
                  />
                </div>
              </div>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={Food2} alt="Food 2" className="w-full h-48 object-cover" />
                <div className="p-4 flex flex-col items-center">
                  <h2 className="text-xl font-semibold">Food Item 2</h2>
                  <p className="mt-2 text-gray-600">Delicious food description goes here.</p>
                  <p className="mt-2 text-gray-800 font-bold">₹400</p>
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="text-blue-500 text-xl hover:text-blue-900 cursor-pointer"
                    onClick={() => addToCart({
                      name: "Food Item 2",
                      image: Food2,
                      price: 400
                    })}
                  />
                </div>
              </div>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={Food3} alt="Food 3" className="w-full h-48 object-cover" />
                <div className="p-4 flex flex-col items-center">
                  <h2 className="text-xl font-semibold">Food Item 3</h2>
                  <p className="mt-2 text-gray-600">Delicious food description goes here.</p>
                  <p className="mt-2 text-gray-800 font-bold">₹350</p>
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="text-blue-500 text-xl hover:text-blue-900 cursor-pointer"
                    onClick={() => addToCart({
                      name: "Food Item 3",
                      image: Food3,
                      price: 350
                    })}
                  />
                </div>
              </div>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={Food4} alt="Food 4" className="w-full h-48 object-cover" />
                <div className="p-4 flex flex-col items-center">
                  <h2 className="text-xl font-semibold">Food Item 4</h2>
                  <p className="mt-2 text-gray-600">Delicious food description goes here.</p>
                  <p className="mt-2 text-gray-800 font-bold">₹450</p>
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="text-blue-500 text-xl hover:text-blue-900 cursor-pointer"
                    onClick={() => addToCart({
                      name: "Food Item 4",
                      image: Food4,
                      price: 450
                    })}
                  />
                </div>
              </div>
            </div>
          } 
        />
        <Route 
          path="/cart" 
          element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} 
        />
      </Routes>
    </div>
  );
}

export default Cards;
