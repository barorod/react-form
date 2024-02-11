import { useState } from 'react';
// import ShoppingListForm from './ShoppingListForm';
import ValidatedShoppingListForm from './ValidatedShoppingListForm';
import { v4 as uuid } from 'uuid';

export default function ShoppingList() {
	const [items, setItems] = useState([]);
	const addItem = (item) => {
		setItems((curreItems) => [...curreItems, { ...item, id: uuid() }]);
	};
	return (
		<div>
			<h1>Shopping List</h1>
			<ul>
				{items.map((i) => (
					<li key={i.id}>
						{i.product} - {i.quantity}
					</li>
				))}
			</ul>
			<ValidatedShoppingListForm newItem={addItem} />
		</div>
	);
}
