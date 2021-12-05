import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
	<div className="textContainer">
		<div>
			<h1>
				Kudrat Realtime Anonymous Chat Application <span role="img" aria-label="emoji" />
			</h1>
			<h2>
				Created by Swapnil Hajare <span role="img" aria-label="emoji" />
			</h2>
			<h2>
				Because freedom of expression is not a privilege but a right.<span role="img" aria-label="emoji">
					🗣
				</span>
			</h2>
		</div>
		{users ? (
			<div>
				<h1>People currently chatting:</h1>
				<div className="activeContainer">
					<h2>
						{users.map(({ name }) => (
							<div key={name} className="activeItem">
								{name}
								<img alt="Online Icon" src={onlineIcon} />
							</div>
						))}
					</h2>
				</div>
			</div>
		) : null}
	</div>
);

export default TextContainer;
