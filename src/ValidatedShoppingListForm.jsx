import { useState } from 'react';
import { validate } from 'uuid';

export default function ValidatedShoppingListForm({ newItem }) {
	const [formData, setFormData] = useState({ product: '', quantity: 0 });
	const [productIsValid, setProductIsValid] = useState(false);

	const validate = (product) => {
		if (product.length === 0) {
			setProductIsValid(false);
		} else {
			setProductIsValid(true);
		}
	};

	const handleChange = (evt) => {
		if (evt.target.name === 'product') {
			validate(evt.target.value);
		}
		setFormData((currData) => ({
			...currData,
			[evt.target.name]: evt.target.value,
		}));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		if (productIsValid) {
			newItem(formData);
			setFormData({ product: '', quantity: 0 });
		}
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
				{!productIsValid && (
					<p style={{ color: 'red' }}>Product name cannot be empty!</p>
				)}
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
			<button disabled={!productIsValid}>Add Item</button>
		</form>
	);
}
