import React from 'react';

export const Whatsapp = () => {
	return (
		<>
			<a
				className="app-whatsapp"
				target="_blank"
				rel="noreferrer"
				href ="https://api.whatsapp.com/send?phone=573003050870&text=Hola,%20necesito%20una%20cotización,por%20favor"
			>
				<i className="fab fa-whatsapp " />
			</a>
		</>
	);
};
