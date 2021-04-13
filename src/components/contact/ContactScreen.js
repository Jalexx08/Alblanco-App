import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';

export const ContactScreen = () => {
	const [formValues, handleInputChange, reset] = useForm({
		name: '',
		email: '',
		message: '',
	});

	const regex = {
		nameRegex: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		emailRegex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	};

	const [nameValidate, setNameValidate] = useState(null);
	const [emailValidate, setEmailValidate] = useState(null);
	const [msgValidate, setMsgValidate] = useState(null);

	const { name, email, message } = formValues;
	const { nameRegex, emailRegex } = regex;

	const formData = new FormData();

	const handleValidateName =()=>{
		(nameRegex.test(name.trim())) ? setNameValidate(false) : setNameValidate(true);
	}

	const handleValidateEmail =()=>{
		(emailRegex.test(email.trim())) ? setEmailValidate(false) : setEmailValidate(true);
	}

	const handleValidateMsg =()=>{
		(message.trim() !== '') ? setMsgValidate(false) : setMsgValidate(true);
	}


	formData.append('name', name.trim());
	formData.append('email', email.trim());
	formData.append('message', message.trim());

	const handleSubmit = (e) => {
		e.preventDefault();
		// handleValidate();

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
						placeholder="Tu nombre"
						value={name}
						onChange={handleInputChange}
						onKeyUp={handleValidateName}
						onBlur={handleValidateName}
					/>
					{nameValidate && (
						<p className="caption-error">Debe ingresar un nombre válido</p>
					)}
					<input
						className="form-input"
						autoComplete="off"
						type="text"
						name="email"
						placeholder="Tu correo"
						value={email}
						onChange={handleInputChange}
						onKeyUp={handleValidateEmail}
						onBlur={handleValidateEmail}
					/>
					{emailValidate && (
						<p className="caption-error">Debe ingresar un correo válido</p>
					)}
					<textarea
						className="form-input"
						autoComplete="off"
						type="text"
						name="message"
						placeholder="Déjanos tu mensaje"
						value={message}
						onChange={handleInputChange}
						onKeyUp={handleValidateMsg}
						onBlur={handleValidateMsg}
						rows="4"
					/>
					{msgValidate && (
						<p className="caption-error">No se puede enviar mensaje vacío</p>
					)}
				</div>

				<div className="center-content">
					<input type="submit" value="Enviar" className="btn btn-secondary" />
				</div>
			</form>
		</div>
	);
};
