import React from 'react';
import { useForm } from '../../hooks/useForm';

export const ContactScreen = () => {
	const [formValues, handleInputChange, reset] = useForm({
		name: '',
		email: '',
		message: '',
	});

	const { name, email, message } = formValues;

	const formData = new FormData();
	formData.append('name', formValues.name);
	formData.append('email', formValues.email);
	formData.append('message', formValues.message);

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch('send.php', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			mode: 'no-cors',
			body: formData,
		})
			.then((resp) => resp.json())
			.then(console.log);

		console.log('enviado');
		console.log(formData);

		reset();
	};

	return (
		<div className="container">
			<h1 className="title-main">Contáctenos</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-content">
					<input
						className="form-input"
						autoComplete="off"
						type="text"
						name="name"
						placeholder="Ingresa tu nombre"
						value={name}
						onChange={handleInputChange}
					/>
					<input
						className="form-input"
						autoComplete="off"
						type="text"
						name="email"
						placeholder="Ingresa tu correo"
						value={email}
						onChange={handleInputChange}
					/>
					<textarea
						className="form-input"
						autoComplete="off"
						type="text"
						name="message"
						placeholder="Ingresa tu mensaje"
						value={message}
						onChange={handleInputChange}
						rows="4"
					/>
				</div>

				<div className="center-content">
					<input type="submit" value="Enviar" className="btn btn-secondary" />
				</div>
			</form>
		</div>
	);
};
