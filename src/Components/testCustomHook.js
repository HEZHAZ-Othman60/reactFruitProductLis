import { useState } from 'react';

function testCustomHook() {
	const [color, setColor] = useState('');

	return (
		<div style={{ width: '100vw', height: '100vw', backgroundColor: 'blue' + color }}>
			<button
				onClick={() => {
					setColor(Math.random().toString(16).substr(-6));
				}}
			>
				Change Color
			</button>
		</div>
	);
}
export default testCustomHook;
