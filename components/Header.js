import { h } from 'hyperapp';

export default (state, actions) => (
	<nav>
		<h1>{state.title}</h1>
		{state.subtitle && <h2>{state.subtitle}</h2>}
	</nav>
);
