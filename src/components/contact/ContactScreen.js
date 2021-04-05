import React from 'react';
import { useForm } from '../../hooks/useForm';

export const ContactScreen = () => {
	const [formValues, handleInputChange, reset] = useForm({
		name: '',
		email: '',
		message: '',
	});

	const { name, email, message } = formValues;

	return (
		<div className="container">
			<h1 className="title-main">Contáctenos</h1>
			<form>
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
						rows ="4"
					/>
				</div>

				<div className ="center-content">
					<input
						type="submit"
						value="Enviar"
						className="btn btn-secondary"
					/>
				</div>
			</form>
		</div>
	);
};
