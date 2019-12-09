import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

function App() {
	const [ products ] = useState(data);
	const [ cart, setCart ] = useState([]);

	console.log('This is the Cart', cart);

	const addItem = (item) => {
		// adds the item to the cart
		console.log('This is the Item', item);
		setCart([ ...cart, item ]);
	};

	const removeItem = (id) => {
		console.log('This is the Id that we are removing', id);
		const filtered = cart.filter((item) => {
			return item.id !== id;
		});
		console.log('This is the filter', filtered);
		setCart(filtered);
	};

	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{ cart, setCart, removeItem }}>
				<div className='App'>
					<Navigation />
					{/* Routes */}
					<Route exact path='/' component={Products} />
					<Route path='/cart' component={ShoppingCart} />
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
