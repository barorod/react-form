import { useState } from 'react';

export default function ShoppingListForm({ newItem }) {
	const [formData, setFormData] = useState({ product: '', quantity: 0 });
	const handleChange = (evt) => {
		setFormData((currData) => ({
			...currData,
			[evt.target.name]: evt.target.value,
		}));
	};
	const handleSubmit = (evt) => {
		evt.preventDefault();
		newItem(formData);
		setFormData({ product: '', quantity: 0 });
	};
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="product">Product : </label>
				<input
					placeholder="Product Name"
					type="text"
					id="product"
					name="product"
					onChange={handleChange}
					value={formData.product}
				/>
			</div>
			<div>
				<label htmlFor="quantity">Quantity : </label>
				<input
					placeholder="0"
					type="number"
					id="quantity"
					name="quantity"
					onChange={handleChange}
					value={formData.quantity}
				/>
			</div>
			<button>Add Item</button>
		</form>
	);
}
