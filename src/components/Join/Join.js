import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';
import Logo from '../../icons/logo.png';

document.title = 'Kudrat Chat App';

export default function SignIn() {
	const [ name, setName ] = useState('');
	const [ room, setRoom ] = useState('');

	return (
		<div className="joinOuterContainer">
			<div className="joinInnerContainer">
				<img src={Logo} className="kudImg" />
				<h1 className="heading">Join Kudrat</h1>
				<div>
					<input
						placeholder="Name Here"
						className="joinInput"
						type="text"
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div>
					<input
						placeholder="Room Name"
						className="joinInput mt-20"
						type="text"
						onChange={(event) => setRoom(event.target.value)}
					/>
				</div>
				<Link
					onClick={(e) => (!name || !room ? e.preventDefault() : null)}
					to={`/chat?name=${name}&room=${room}`}
				>
					<button className={'button mt-20'} type="submit">
						Sign In
					</button>
				</Link>
			</div>
		</div>
	);
}
